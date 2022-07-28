const request = require('supertest')
const dayjs = require('dayjs')
const path = require('path')

const admin = { username: 'admin', password: 'test', grant_type: 'password', client_id: 'self' }

let token
let app
let places = []

beforeAll( async () => {
  switch (process.env.DB) {
    case 'mariadb':
      process.env.config_path = path.resolve(__dirname, './seeds/config.mariadb.json')
      break
    case 'postgresql':
      process.env.config_path = path.resolve(__dirname, './seeds/config.postgres.json')
      break
    case 'sqlite':
    default:
      process.env.config_path = path.resolve(__dirname, './seeds/config.sqlite.json')
  }
  app = await require('../server/routes.js').main()
  const { sequelize } = require('../server/api/models/index')
  await sequelize.query('DELETE FROM settings')
  await sequelize.query('DELETE FROM events')
  await sequelize.query('DELETE FROM users')
  await sequelize.query('DELETE FROM ap_users')
  await sequelize.query('DELETE FROM tags')
  await sequelize.query('DELETE FROM places')
  await sequelize.query('DELETE FROM collections')
})

afterAll( async () => {
  await require('../server/initialize.server.js').shutdown(false)
})

describe('Basic', () => {
  test('shoud return an empty list', async () => {
    const response = await request(app).get('/api/events')
      .expect(200)

    expect(response.body.length).toBe(0)
  })
})

describe('Authentication / Authorization', () => {
  test('should not return an user when not authenticated', () => {
    return request(app).get('/api/user')
      .expect(403)
  })

  test('should not authenticate with wrong user/password', () => {
    return request(app).post('/oauth/login')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .expect(500)
  })

  test('shoud register an admin as first user', async () => {
    const response = await request(app)
      .post('/api/user/register')
      .send({ email: 'admin', password: 'test' })
      .expect(200)
    expect(response.body.id).toBeDefined()
  })

  test('should authenticate with correct user/password', async () => {
    const response = await request(app)
      .post('/oauth/login')
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .send(admin)
      .expect(200)
    expect(response.body.refresh_token).toBeDefined()
    expect(response.body.access_token).toBeDefined()
    expect(response.body.token_type).toBe('Bearer')
    token = response.body
  })
  
  test('should get user when authenticated', async () => {
    const response = await request(app).get('/api/user')
      .auth(token.access_token, { type: 'bearer' })
      .expect(200)
    expect(response.body.email).toBe(admin.username)
    expect(response.body.is_admin).toBe(true)
  })

  test('should not change settings when not allowed', async () => {
    return request(app).post('/api/settings')
      .send({ key: 'allow_anon_event', value: false })
      .expect(403)
  })

})

describe('Events', () => {

  test('should not allow event creation without required fields', async () => {
    const required_fields = {
      'title': {},
      'start_datetime': { title: 'test title' },
      'place_id or place_name and place_address': { title: 'test title', start_datetime: dayjs().unix()+1000, place_name: 'test place name'},
    }

    const promises = Object.keys(required_fields).map(async field => {
      const response = await request(app).post('/api/event').send(required_fields[field])
        .expect(400)
      expect(response.text).toBe(`${field} required`)
    })

    return Promise.all(promises)
  })


  test('should create anon event only when allowed', async () => {

    await request(app).post('/api/settings')
    .send({ key: 'allow_anon_event', value: false })
    .auth(token.access_token, { type: 'bearer' })
      .expect(200)

    await request(app).post('/api/event')
      .expect(403)

    let response = await request(app).post('/api/event')
      .send({ title: 'test title 2', place_name: 'place name', place_address: 'address', tags: ['test'], start_datetime: dayjs().unix()+1000 })
      .auth(token.access_token, { type: 'bearer' })
      .expect(200)

    expect(response.body.place.id).toBeDefined()
    places.push(response.body.place.id)

    await request(app).post('/api/settings')
      .send({ key: 'allow_anon_event', value: true })
      .auth(token.access_token, { type: 'bearer' })
        .expect(200)

    response = await request(app).post('/api/event')
      .send({ title: 'test title 3', place_name: 'place name 2', place_address: 'address 2', tags: ['test'], start_datetime: dayjs().unix()+1000 })
      .expect(200)

    expect(response.body.place.id).toBeDefined()
    places.push(response.body.place.id)

  })

  test('should trim tags', async () => {
    const event = {
      title: 'test title 4',
      place_id: places[0],
      start_datetime: dayjs().unix()+1000,
      tags: [' test tag ']
    }

    const response = await request(app).post('/api/event')
      .send(event)
      .expect(200)
      .expect('Content-Type', /json/)

    expect(response.body.tags[0]).toBe('test tag')
  })
})

describe('Tags', () => {
  test('should create event with tags', async () => {
    const event = await request(app).post('/api/event')
      .send({ title: 'test tags', place_id: places[1], start_datetime: dayjs().unix()+1000 , tags: ['tag1', 'Tag2', 'tAg3'] })
      .auth(token.access_token, { type: 'bearer' })
      .expect(200)

    expect(event.body.tags.length).toBe(3)
  })

  test('should create event trimming tags / ignore sensitiviness', async () => {
    const event = await request(app).post('/api/event')
      .send({ title: 'test trimming tags', place_id: places[1], start_datetime: dayjs().unix()+1000, tags: ['Tag1', 'taG2 '] })
      .auth(token.access_token, { type: 'bearer' })
      .expect(200)

    expect(event.body.tags.length).toBe(2)
    expect(event.body.tags[0]).toBe('tag1')
    expect(event.body.tags[1]).toBe('Tag2')
  })  

  test('should return events searching for tags', async () => {
    const response = await request(app).get('/api/events?tags=tAg3')
      .expect(200)
    
    expect(response.body.length).toBe(1)
    // expect(response.body[0].title).toBe('test tags')
    expect(response.body[0].tags.length).toBe(3)
  })
})

describe('Place', () => {
  test('should get events by place', async () => {
    const response = await request(app).get('/api/place/place name 2')
      .expect(200)
      
    expect(response.body.place.name).toBe('place name 2')
    expect(response.body.events.length).toBe(2)
    expect(response.body.events[0].place.name).toBe('place name 2')
  })

  test('admin should get all places', async () => {
    await request(app).get('/api/place/all')
      .expect(403)

    const response = await request(app).get('/api/place/all')
      .auth(token.access_token, { type: 'bearer' })
      .expect(200)
    

    expect(response.body.length).toBe(2)
  })

  test('should search for a place', async () => {
    const response = await request(app).get('/api/place?search=place')
      .expect(200)
    
    expect(response.body.length).toBe(2)
  })

})

let collections = []
let filters = []
describe ('Collection', () => {
  test('should not create a new collection if not allowed', () => {
    return request(app).post('/api/collections')
      .send({ name: 'test collection' })
      .expect(403)
  })

  test('should create a new collection', async () => {
    const response = await request(app).post('/api/collections')
      .send({ name: 'test collection' })
      .auth(token.access_token, { type: 'bearer' })
      .expect(200)
    expect(response.body.id).toBeDefined()
    collections.push(response.body.id)
  })

  test('should do not have any event when no filters', async () => {
    const response = await request(app).get('/api/collections/test collection')
      .expect(200)

      expect(response.body.length).toBe(0)
    })


  test('should add a new filter', async () => {
    await request(app)
      .post('/api/filter')
      .send({ collectionId: collections[0], tags: ['test'] })
      .expect(403)

    const response = await request(app).post('/api/filter')
      .send({ collectionId: collections[0], tags: ['test'] })
      .auth(token.access_token, { type: 'bearer' })
      .expect(200)

    expect(response.body.id).toBeDefined()
    filters.push(response.body.id)

  })

  test('should get collection events', async () => {
    const response = await request(app)
      .get(`/api/collections/test collection`)
      .expect(200)

    expect(response.body.length).toBe(1)
  })

  test('should remove filter', async () => {
    await request(app)
      .delete(`/api/filter/${filters[0]}`)
      .expect(403)

    await request(app)
      .delete(`/api/filter/${filters[0]}`)
      .auth(token.access_token, { type: 'bearer' })
      .expect(200)

    const response = await request(app)
      .get(`/api/filter/${filters[0]}`)
      .auth(token.access_token, { type: 'bearer' })
      .expect(200)

    expect(response.body.length).toBe(0)
  })

  test('shoud filter for tags', async () => {
    let response = await request(app)
      .post('/api/filter')
      .send({ collectionId: collections[0], tags: ['test'] })
      .auth(token.access_token, { type: 'bearer' })
      .expect(200)


    // response = await request(app)
    // .get(`/api/filter/${response.body.id}`)
    // .auth(token.access_token, { type: 'bearer' })
    // .expect(200)
    // expect(response.body.length).toBe(1)

    response = await request(app) 
      .get(`/api/collections/test collection`)
      .expect(200)

    expect(response.body.length).toBe(1)

  })

})
