const Place = require('../models/place')
const Event = require('../models/event')
const eventController = require('./event')
const exportController = require('./export')

const log = require('../../log')
const { Op, where, col, fn, cast } = require('sequelize')
const NOMINATIM_URL = 'https://nominatim.openstreetmap.org/search'
const axios = require('axios')

module.exports = {

  async getEvents (req, res) {
    const placeName = req.params.placeName
    const place = await Place.findOne({ where: { name: placeName }})
    if (!place) {
      log.warn(`Place ${placeName} not found`)
      return res.sendStatus(404)
    }

    const format = req.params.format || 'json'
    log.debug(`Events for place: ${placeName}`)
    const events = await eventController._select({ places: String(place.id), show_recurrent: true })

    switch (format) {
      case 'rss':
        return exportController.feed(req, res, events,
            `${res.locals.settings.title} - Place @${place.name}`,
            `${res.locals.settings.baseurl}/feed/rss/place/${place.name}`)
      case 'ics':
        return exportController.ics(req, res, events)
      default:
        return res.json({ events, place })
    }

  },


  async updatePlace (req, res) {
    const place = await Place.findByPk(req.body.id)
    await place.update(req.body)
    res.json(place)
  },

  async getAll (_req, res) {
    const places = await Place.findAll({
      order: [[cast(fn('COUNT', col('events.placeId')),'INTEGER'), 'DESC']],
      include: [{ model: Event, where: { is_visible: true }, required: true, attributes: [] }],
      group: ['place.id'],
      raw: true
    })
    return res.json(places)
  },

  async search (req, res) {
    const search = req.query.search.toLocaleLowerCase()
    const places = await Place.findAll({
      order: [[cast(fn('COUNT', col('events.placeId')),'INTEGER'), 'DESC']],
      where: {
        [Op.or]: [
          { name: where(fn('LOWER', col('name')), 'LIKE', '%' + search + '%' )},
          { address: where(fn('LOWER', col('address')), 'LIKE', '%' + search + '%')},
        ]
      },
      attributes: ['name', 'address', 'latitude', 'longitude', 'id'],
      include: [{ model: Event, where: { is_visible: true }, required: true, attributes: [] }],
      group: ['place.id'],
      raw: true,
      limit: 10,
      subQuery: false
    })

    // TOFIX: don't know why limit does not work
    return res.json(places.slice(0, 10))
  },

  async _nominatim (req, res) {
    const details = req.params.place_details
    // ?limit=3&format=json&namedetails=1&addressdetails=1&q=

    const ret = await axios.get(`${NOMINATIM_URL}`, {
      params: {
        q: details,
        limit: 3,
        format: 'json',
        addressdetails: 1,
        namedetails: 1
      },
      headers: { 'User-Agent': 'gancio 1.6.0' }
    })
    return res.json(ret.data)
  },

}
