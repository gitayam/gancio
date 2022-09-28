const express = require('express')
const app = express()
const initialize = require('./initialize.server')

const config = require('./config')
const helpers = require('./helpers')

app.use([
  helpers.setUserLocale,
  helpers.initSettings,
  helpers.logRequest,
  helpers.serveStatic()
])

async function main () {

  await initialize.start()

  // const metricsController = require('./metrics')
  // const promBundle = require('express-prom-bundle')
  // const metricsMiddleware = promBundle({ includeMethod: true })

  const log = require('./log')
  const api = require('./api')

  app.enable('trust proxy')

  // do not handle all routes on setup
  if (config.status === 'READY') {
    const cors = require('cors')
    const { spamFilter } = require('./federation/helpers')
    const federation = require('./federation')
    const webfinger = require('./federation/webfinger')
    const exportController = require('./api/controller/export')
    const tagController = require('./api/controller/tag')
    const placeController = require('./api/controller/place')
    const collectionController = require('./api/controller/collection')
    const authController = require('./api/controller/oauth')

    // rss / ics feed
    app.use(helpers.feedRedirect)
    app.get('/feed/:format/tag/:tag', cors(), tagController.getEvents)
    app.get('/feed/:format/place/:placeName', cors(), placeController.getEvents)
    app.get('/feed/:format/collection/:name', cors(), collectionController.getEvents)
    app.get('/feed/:format', cors(), exportController.export)
    
    app.use('/event/:slug', helpers.APRedirect)
    
    // federation api / activitypub / webfinger / nodeinfo
    app.use('/federation', federation)
    app.use('/.well-known', webfinger)

    // ignore unimplemented ping url from fediverse
    app.use(spamFilter)

    app.use(authController.authenticate)
    app.post('/oauth/token', authController.token)
    app.post('/oauth/login', authController.login)
    app.get('/oauth/authorize', authController.authorization)    
    app.post('/oauth/authorize', authController.decision)
  }

  // api!
  app.use('/api', api)

  // // Handle 500
  app.use((error, _req, res, _next) => {
    log.error('[ERROR]' + error)
    return res.status(500).send('500: Internal Server Error')
  })

  // remaining request goes to nuxt
  // first nuxt component is ./pages/index.vue (with ./layouts/default.vue)
  // prefill current events, tags, places and announcements (used in every path)
  app.use(async (_req, res, next) => {
    if (config.status === 'READY') {

      const announceController = require('./api/controller/announce')
      res.locals.announcements = await announceController._getVisible()
    }
    res.locals.status = config.status
    next()
  })

  return app
}

if (process.env.NODE_ENV !== 'test') {
  main()
}

// app.listen(13120)

module.exports = {
  main,
  handler: app,
  unload: () => initialize.shutdown(false)
}
