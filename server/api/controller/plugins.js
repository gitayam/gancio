const path = require('path')
const fs = require('fs')
const log = require('../../log')
const config = require('../../config')

const pluginController = {
  plugins: [],
  getAll(_req, res) {
    const settingsController = require('./settings')
    // return plugins and inner settings
    const plugins = pluginController.plugins.map(p => {
      if (settingsController.settings['plugin_' + p.name]) {
        p.settingsValue = settingsController.settings['plugin_' + p.name]
      }
      return p
    })
    return res.json(plugins)
  },

  togglePlugin(req, res) {
    const settingsController = require('./settings')
    const pluginName = req.params.plugin
    const pluginSettings = settingsController.settings['plugin_' + pluginName]
    if (!pluginSettings) { return res.sendStatus(404) }
    if (!pluginSettings.enable) {
      pluginController.loadPlugin(pluginName)
    } else {
      pluginController.unloadPlugin(pluginName)
    }
    settingsController.set('plugin_' + pluginName,
      { ...pluginSettings, enable: !pluginSettings.enable })
    res.json()
  },

  unloadPlugin(pluginName) {
    const settingsController = require('./settings')
    const plugin = pluginController.plugins.find(p => p.name === pluginName)
    const settings = settingsController.settings['plugin_' + pluginName]
    if (!plugin) {
      log.warn(`Plugin ${pluginName} not found`)
      return
    }
    const notifier = require('../../notifier')
    log.info('Unload plugin ' + plugin)
    if (typeof plugin.onEventCreate === 'function') {
      notifier.emitter.off('Create', plugin.onEventCreate)
    }
    if (typeof plugin.onEventDelete === 'function') {
      notifier.emitter.off('Delete', plugin.onEventDelete)
    }
    if (typeof plugin.onEventUpdate === 'function') {
      notifier.emitter.off('Update', plugin.onEventUpdate)
    }

    if (plugin.unload && typeof plugin.unload === 'function') {
      plugin.unload({ settings: settingsController.settings }, settings)
    }

  },

  loadPlugin(pluginName) {
    const settingsController = require('./settings')
    const plugin = pluginController.plugins.find(p => p.name === pluginName)
    const settings = settingsController.settings['plugin_' + pluginName]
    if (!plugin) {
      log.warn(`Plugin ${pluginName} not found`)
      return
    }
    const notifier = require('../../notifier')
    log.info('Load plugin ' + plugin)
    if (typeof plugin.onEventCreate === 'function') {
      notifier.emitter.on('Create', plugin.onEventCreate)
    }
    if (typeof plugin.onEventDelete === 'function') {
      notifier.emitter.on('Delete', plugin.onEventDelete)
    }
    if (typeof plugin.onEventUpdate === 'function') {
      notifier.emitter.on('Update', plugin.onEventUpdate)
    }

    if (plugin.unload && typeof plugin.unload === 'function') {
      plugin.load({ settings: settingsController.settings }, settings)
    }
  },

  _load() {
    const settingsController = require('./settings')
    // load custom plugins
    const plugins_path = config.plugins_path || path.resolve(process.env.cwd || '', 'gancio_plugins')
    log.info(`Loading plugin  ${plugins_path}`)
    if (fs.existsSync(plugins_path)) {
      const plugins = fs.readdirSync(plugins_path)
        .map(e => path.resolve(plugins_path, e, 'index.js'))
        .filter(index => fs.existsSync(index))
      plugins.forEach(pluginFile => {
        try {
          const plugin = require(pluginFile)
          if (typeof plugin.load !== 'function') return
          const name = plugin.configuration.name
          console.log(`Found plugin '${name}'`)
          pluginController.plugins.push(plugin.configuration)
          console.error(settingsController.settings['plugin_' + name])
          if (settingsController.settings['plugin_' + name]) {
            const pluginSetting = settingsController.settings['plugin_' + name]
            if (pluginSetting.enable) {
              pluginController.loadPlugin(name)
            }
          } else {
            settingsController.set('plugin_' + name, { enable: false })
          }
        } catch (e) {
          log.warn(`Unable to load plugin ${pluginFile}: ${String(e)}`)
        }
      })
    }
  }
}

module.exports = pluginController
