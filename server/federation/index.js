const express = require('express')
const router = express.Router()
const cors = require('cors')
const Users = require('./users')
const { Event, User, Tag, Place } = require('../api/models/models')

const settingsController =  require('../api/controller/settings')

const Helpers = require('./helpers')
const Inbox = require('./inbox')
const log = require('../log')

/**
 * Federation is calling!
 * ref: https://www.w3.org/TR/activitypub/#Overview
 */

router.use(cors())

// is federation enabled? middleware
router.use((_req, res, next) => {
  if (settingsController.settings.enable_federation) { return next() }
  log.debug('Federation disabled!')
  return  res.status(401).send('Federation disabled')
})

router.use(express.json({ type: ['application/json', 'application/activity+json', 'application/ld+json; profile="https://www.w3.org/ns/activitystreams"'] }))

router.get('/m/:event_id', async (req, res) => {
  log.debug('[AP] Get event details ')
  const event_id = req.params.event_id
  const acceptHtml = req.accepts('html', 'application/activity+json') === 'html'
  if (acceptHtml) { return res.redirect(301, `/event/${event_id}`) }

  const event = await Event.findByPk(req.params.event_id, { include: [User, Tag, Place] })
  if (!event) { return res.status(404).send('Not found') }
  const eventAp = event.toAP(settingsController.settings)
  eventAp['@context'] = [
    "https://www.w3.org/ns/activitystreams"
  ]

  res.type('application/activity+json; charset=utf-8')
  return res.json(eventAp)
})

// get any message coming from federation
router.post('/u/:name/inbox', Helpers.verifySignature, Inbox)

router.get('/u/:name/outbox', Users.outbox)
router.get('/u/:name/followers', Users.followers)
router.get('/u/:name', Users.get)

// Handle 404
router.use((req, res) => {
  log.warn(`404 Page not found: ${req.path}`)
  res.status(404).send('404: Page not Found')
})

module.exports = router
