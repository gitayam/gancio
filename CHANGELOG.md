# Changelog

All notable changes to this project will be documented in this file. See [commit-and-tag-version](https://github.com/absolute-version/commit-and-tag-version) for commit guidelines.

## [1.10.1](https://framagit.org/les/gancio/compare/v1.10.0...v1.10.1) (2024-01-08)


### Bug Fixes

* add whole jsonLD object to events ([cb7932c](https://framagit.org/les/gancio/commit/cb7932c09dde83bb876419488592e4cdd926ffea))
* admin tag editing without blur, fix [#326](https://framagit.org/les/gancio/issues/326) ([9f8d137](https://framagit.org/les/gancio/commit/9f8d137d3033a0b0a667ac15a672bc016bb2cf2d))
* **AP:** follow trusted node ([8b54ed1](https://framagit.org/les/gancio/commit/8b54ed179a6305a5a7f849ee1a892bdf493d7a81))
* **AP:** return a 201 on Create/Update/Delete ([4868c0a](https://framagit.org/les/gancio/commit/4868c0af580296ec71a5cf3d799aed5fa316c94e))
* dedup tags, minor with [#169](https://framagit.org/les/gancio/issues/169) ([44daa90](https://framagit.org/les/gancio/commit/44daa901dc3a95a2e1eefab41cf9a8114d8d18bd))
* event exports when collection_in_home and tags or places are selected ([f160430](https://framagit.org/les/gancio/commit/f1604306259f8a4e09a0356ae7604ec4a44cdcb4))
* export collection's feeds (ics/rss) ([04403e0](https://framagit.org/les/gancio/commit/04403e0a345ebb8932883926273ac59c7cec5242))
* if a user edits an event by postponing it, say by a week, without changing the hours, the end date should be recalculate ([6c2840a](https://framagit.org/les/gancio/commit/6c2840a7fa4be6f50ca1ad51877b3436c9663b40))
* improve fedi events validation ([07a0ea0](https://framagit.org/les/gancio/commit/07a0ea01463dd6a0b56181a3f9d03caef4b661c9))
* improve trusted node display in Admin>Collection ([dcb7498](https://framagit.org/les/gancio/commit/dcb7498c675ddb96fc974146a7e0d12e30d7dd33))
* improve unit testing ([9482ba9](https://framagit.org/les/gancio/commit/9482ba9e394d1e05615386e98b2085c202b922bc))
* improve validation on event's update ([90deb79](https://framagit.org/les/gancio/commit/90deb79d6b70f9b10cb24aadf6ef59319f134d07))
* include description into rss/ics ([4f99a5d](https://framagit.org/les/gancio/commit/4f99a5df30cc2914932d0b04b4dbfd48e9d0f526))
* re-add followers ([2971956](https://framagit.org/les/gancio/commit/29719569a1c97b9d6cfadcd7bff427e578850852))
* update deps ([16a0695](https://framagit.org/les/gancio/commit/16a06959f488b504e1cb726f6664a45427a27fca))
* update instances ([f7d4824](https://framagit.org/les/gancio/commit/f7d4824349932ad6d427613ad946176067739bee))
* use online_locations instead of place address for online events in rss feed ([0f047a2](https://framagit.org/les/gancio/commit/0f047a264ea36d9226231aede410cf8034c780e7))

## [1.10.0](https://framagit.org/les/gancio/compare/v1.8.0...v1.10.0) (2023-12-29)

This release is a big step toward interoperability with ActivityPub, look at the [documentation](https://gancio.org/federation) for the details.  
Thanks to @linos from [event-federation.eu](https://event-federation.eu/) and @tcit from [mobilizon](https://joinmobilizon.org/)


### Features

* **AP:**  implement FEP-2677 in nodeinfo ([07fcbbd](https://framagit.org/les/gancio/commit/07fcbbd4ce6727817812b9c71903ca1bf61d394e))
* **AP:** implement application Actor retrieval FEP-2677 ([9c74f51](https://framagit.org/les/gancio/commit/9c74f5198d7c2c360fdb70ebbd0d4bfc2e6999b4))
* **AP:** improve logging and interoperability ([ca1bd24](https://framagit.org/les/gancio/commit/ca1bd2487cd2c42af096dd9cd1b8f07beceb90eb))
* **AP:** retrieve instance info via nodeinfo ([1e0665d](https://framagit.org/les/gancio/commit/1e0665dc3d2de8f0f459d8941403ce1276269b39))
* **AP:** support Note/Event update and removal ([f1158db](https://framagit.org/les/gancio/commit/f1158dba73501e98918d7fa499289554743832b9))
* **AP:** improve interaction with AP, [#322](https://framagit.org/les/gancio/issues/322) ([340d503](https://framagit.org/les/gancio/commit/340d50301f1b76ebc17dd4fe6d419c2afc5fb556))
* **AP:** init unit test ([12c0f21](https://framagit.org/les/gancio/commit/12c0f21a8984acd9d10f2fb86e6dc6b7b8d25aef))
* **AP:** minor with unfollow ([a70529d](https://framagit.org/les/gancio/commit/a70529d771f4cb70b9c0946e97810ba85b4242f1))
* **collections:** add instances as potential filter in collections ([7a6101b](https://framagit.org/les/gancio/commit/7a6101be7ba4990bd0c0cf32344e8ca59c4de8c2))
* **collections:** a collection could be used as homepage ([3fd9f5a](https://framagit.org/les/gancio/commit/3fd9f5a8cbc5766c8c6e65fc1ff97ed69cf7edf9))
* **locale** add Românesc ([bdc6b39](https://framagit.org/les/gancio/commit/bdc6b3925a68314d75a3c3ca4fd1af72149d1199))


### Bug Fixes

* use .splat in production too ([5dcae0d](https://framagit.org/les/gancio/commit/5dcae0d9755726553974b32338187bf3b8a01067))
* body parse ld+json coming from fediverse ([f96c826](https://framagit.org/les/gancio/commit/f96c8261d778bc2b9dc3b9e9a4446bda459bd6c3))


## [1.8.0](https://framagit.org/les/gancio/compare/v1.7.1...v1.8.0) (2023-12-15)


### Features

* add Turkish language ([c99772e](https://framagit.org/les/gancio/commit/c99772e0b5d8f92fabad9f24ecab5f1ad48053f0))
* improve collections export adding max, start_at parameter ([c472e87](https://framagit.org/les/gancio/commit/c472e876760f172be7246a0aa5e1bc8a7610f7eb))


### Bug Fixes

* do not allow /admin rendering when normal user ([906dca2](https://framagit.org/les/gancio/commit/906dca2b100aa7308790c5948620a4ca3f3fa955))
* hide event being edited in "on same day" area, fix [#318](https://framagit.org/les/gancio/issues/318) ([04c88a4](https://framagit.org/les/gancio/commit/04c88a468b53a8155942d44766b822f6c2beb2dd))
* location name and description not correctly set in microdata ([9811d39](https://framagit.org/les/gancio/commit/9811d395540ca6c7e0f3e2d0caa9295dd4d9308e)), closes [#316](https://framagit.org/les/gancio/issues/316) [#315](https://framagit.org/les/gancio/issues/315)
* missing some style in detail collection page ([185b8bd](https://framagit.org/les/gancio/commit/185b8bd75e3cf9dddb160100d601951b60ab379e))

### [1.7.1](https://framagit.org/les/gancio/compare/v1.7.0...v1.7.1) (2023-11-10)

## [1.7.0](https://framagit.org/les/gancio/compare/v1.6.19...v1.7.0) (2023-11-10)


### Features

* **Collection:** allow to show/hide a collection from homepage ([f60ff37](https://framagit.org/les/gancio/commit/f60ff37a7024bde67e9ee7fd661bb234fbc77882))


### Bug Fixes

* **Admin:** Move the events tab to the left in the admin panel ([3658ee2](https://framagit.org/les/gancio/commit/3658ee26581cb4c34cee6efb0e16f2c4894eb6b5)), closes [#312](https://framagit.org/les/gancio/issues/312)
* make title word-break, fix [#196](https://framagit.org/les/gancio/issues/196) ([e37d190](https://framagit.org/les/gancio/commit/e37d190eae1d3ff6bfc4681174a5d5c5e037fbb9))
* **plugin-telegram-bridge:** fix infinite loop bug ([d1204a0](https://framagit.org/les/gancio/commit/d1204a093e5cde475c11310f7fc00c863b79f96a))
* **recurrent:** clean due date when recurrent type is selected ([54af7c6](https://framagit.org/les/gancio/commit/54af7c662d97414b08ca2366eef77c28c6bf02de))

### [1.6.19](https://framagit.org/les/gancio/compare/v1.6.18...v1.6.19) (2023-11-04)


### Bug Fixes

* issue displaying recurrent event string ([a94ccda](https://framagit.org/les/gancio/commit/a94ccda049f7571a9caa90507141a0aac30331a9))

### 1.6.18 - 3 Nov '23
  - [feat] allow to specify password while create new user via CLI to [support yunohost](https://github.com/YunoHost-Apps/gancio_ynh/pull/2#discussion_r1364285417)
  - [feat] check if I'm reachable to myself to help in [#298](https://framagit.org/les/gancio/-/issues/298)
  - [feat] improve recover and user_confirm error messages
  - [feat] improve export and allow to export `collections` in rss/ics/widget
  - [fix] fix postgres image version in docker-compose [#303](https://framagit.org/les/gancio/-/issues/303)
  - [fix] Improve json-ld representation of events [#33](https://framagit.org/les/gancio/-/merge_requests/33)
  - [fix] Add description field to admin's new user form, closes [#307](https://framagit.org/les/gancio/-/issues/307)
  - [fix] use tls SSLv3 to send email, fix [#192](https://framagit.org/les/gancio/-/issues/192)
  - [fix] notify user when accepted, fix [#308](https://framagit.org/les/gancio/-/issues/308)
  - [fix] forgot password on active user only
  - [fix] make search case insensitive, fix [#301](https://framagit.org/les/gancio/-/issues/301)

### 1.6.17 - 4 Oct '23
  - [fix] typo

### 1.6.16 - 4 Oct '23
  - [feat] add Czech locale
  - [fix] improve datetime validation

### 1.6.15 - 3 Oct '23
  - [feat] clone event
  - [feat] am/pm / 24hr support, fix [#294](https://framagit.org/les/gancio/-/issues/294) [#264](https://framagit.org/les/gancio/-/issues/264)
  - [feat] update telegram plugin bridge to v1.0.3, [#299](https://framagit.org/les/gancio/-/issues/299)
  - [feat] include Brazilian Portuguese (pt-br) and Portugual Portuguese (pt-pt) [#292](https://framagit.org/les/gancio/-/issues/292)
  - [fix] MariaDB JSON fields manual fix
  - [fix] improve some corner case with SMTP From field [#297](https://framagit.org/les/gancio/-/issues/297)
  - [fix] CLI has to fail when configuration not present [#284](https://framagit.org/les/gancio/-/issues/284)
  - [minor] remove html2text dep from client
  - [minor] RSS item's title format is now YYYY-MM-DD, [#300](https://framagit.org/les/gancio/-/issues/300)

### 1.6.14 - 30 June '23
  - improve CLI accounts operations ([documentation](https://gancio.org/usage/cli))
  - allow plugins to expose API ([documentation](http://gancio.org/dev/plugins))
  - allow plugins to access DB ([documentation](http://gancio.org/dev/plugins))
  - show map on the places page, #276 #30
  - add node v18 support, #278
  - fix media update, #285
  - fix nodejs v14 compatibility in export
  - fix invalid event microdata, #277
  - fix recurrent event, #280
  - update deps and locales

### 1.6.13 - 16 may '23
  - fix feed, ics, json exports

### 1.6.12 - 12 may '23
  - Fixed a bad bug in end time calculation that would sometimes hide the event from the homepage the day it occurred
  - map marker is now draggable
  - update locales (Basque, Galician, Italian, Spanish, Catalan)
  - [fix multiline event description breaks ICS export](https://framagit.org/les/gancio/-/issues/234)
  - adds online locations and geo coords to ICS export
  - do not allow duplicate or empty tags in UI
  - [fix wrong week calculation in recurrent events](https://framagit.org/les/gancio/-/issues/266)
  - [show full media on upload / add a switch to show preview](https://framagit.org/les/gancio/-/issues/257)
  - [update image alt text when modified](https://framagit.org/les/gancio/-/issues/267)
  - [check if place or tag exists](https://framagit.org/les/gancio/-/issues/268)
  - fix export microformat / microdata events
  - plugins improvements:
    - [reload plugins when its settings change](https://framagit.org/les/gancio/-/issues/262)
    - [allow plugins to use native log system](https://framagit.org/bcn.convocala/gancio-plugin-telegram-bridge/-/issues/6)
    - [adds a way to test plugins settings from admin](https://framagit.org/bcn.convocala/gancio-plugin-telegram-bridge/-/issues/3)
    - avoid loading the same plugin twice
    - update [gancio-plugin-telegram-bridge](https://framagit.org/bcn.convocala/gancio-plugin-telegram-bridge)

### 1.6.11 - 21 apr '23
  - update deps
  - update locales (polish, spanish, catalan, galician)
  - really fix #259
  - fix #258 without setting TZ env
  - minor fix with events starting or ending at 00:00

### 1.6.10 - 14 apr '23
  - add support to online events (thanks @sedum) #26
  - show past events in tag and place pages #259
  - fix import from URL for guest, #256
  - fix ics export timezone, #258
  - fix autocomplete address when geocoding, #216

### 1.6.8 - 30 mar '23
  - use new $time in admins table, fix #252
  - fix some WPGancio issues
  - new custom color feature!
  - update locales (durch, spanish, galician)
  - improve index, tag, place page layout
  - use luxon instead of dayjs server side, fix #254

### 1.6.7 - 22 mar '23
  - node is not Intl ready, fix #250
  - fix old smultidate events without an end_datetime!
  - fix a small issue during setup

### 1.6.5 - 21 mar '23
  - optimize home page using lazy loading
  - add support for server side http proxy (thanks @sedum)
  - add Duch (nl) locale (thanks @jeoenepraat)
  - fix #244, dark theme user / admin preference merge issue
  - fix some issues with recurrent events, #247
  - improve search flow (order by, press enter or icon...)
  - filters / helpers refactoring
  - tag and place pages list all events (past too)
  - show boosts/bookmarks, fix #241
  - go to event on save/update
  - use luxon instead of dayjs, new $time plugin
  - fix event import from URL
  - remove an annoying warning from logs

### 1.6.4 - 22 feb '23
  - add missing i18n during setup
  - really fix #232
  - downgrade mariadb as sequelize is not ready yet
  - location saving not working when geocoding is disabled, fix #238

### 1.6.3 - 17 feb '23
  - visitors could now choose to view images or not / dark theme or not
  - i18n refactoring, locale loaders, custom strings, fix #231
  - introduce a new instance api limiter
  - hide search filters when none is allowed
  - add instance timezone and AP actor to nodeinfo
  - event api path is now /api/event/detail/
  - fix tag in rss export
  - fix fbclid param removal in url sanitizer
  - fix ics validation
  - rows now breaks correctly in description, fix #237
  - do not use hash as tags separator, fix #210
  - do not use end time when not used, fix #233
  - use timezone on selection, fix #232
  - fix ics link

### 1.6.2 - 12 jan '23
  - add swipe gesture to move to next/prev event
  - fix refresh collections, fix #219
  - add russian translation (thanks @drunkod)
  - refactor search / filter / selection fix #225, 227, #224
  - models initialization refactored, better dev experience, fix backend HMR

### 1.6.1 - 15 dec '22
  - allow edit tags in admin panel, fix #170
  - fix header / fallback image upload, fix #222
  - fix WPGancio MU
  - fix recurrent events label
  - update translations (de, es, eu, gl)

### 1.6.0 - 11 dec '22
  - new plugin system - fix #177
    - new "publish on telegram" plugin: (thanks @fadelkon)
  - people can now choose the language displayed - fix #171
  - admin could choose a custom fallback image - fix #195
  - it is now possible NOT to enter the end time of an event - fix #188
  - live search
  - improve event import
  - add Apple touch icon - fix #200
  - add nominatim / openstreetmap search feature (thanks @sedum)
  - new hide calendar option
  - new hide thumbs from homepage option
  - linkable admin tab
  - friendly instances label is now customizable (thanks @sedum)
  - i18n refactoring
  - Wordpress plugin now supports MU installation
  - new chinese translation
  - new portuguese translation
  - improved navbar layout
  - improved event layout
  - complete oauth2 refactoring
  - fix ics unique uuid
  - fix place "[Object]" issue - #194
  - fix random restart while downloading random media
  - fix mobile dialog layout
  - urlencode place and tag urls


### 1.5.6 - 22 set '22
  - update linkifyjs, sequelizem, nuxt deps
  - improve homepage loading time
  - restore removed icons

### 1.5.5 - 21 set '22
  - fix #185 - wrong res.download api usage
  - fix some dialog background on light theme
  - update sequelize and remove live patch
  - improve events filtering on selected day
  - allow tags complete removals
  - improve homepage performance
  - docs: add scheme to nginx proxy configuration

### 1.5.4 - 6 set '22
  - Update webcomponent deps
  - Refactor datime display in webcomponent
  - Force flyer download
  - Restore range events on calendar
  - Fix limit/max events for mariadb #183
  - Fix endtime selection
  - Fix microdata address

### 1.5.3 - 30 aug '22
  - Fix end time selection when it's in the next day

### 1.5.2 - 26 aug '22
  - fix Editor background color

### 1.5.1 - 14 aug '22
  - fix regression with hidden recurrent events

### 1.5.0 - 8 aug '22
##### :warning:  **BREAKING CHANGES**:
- supported nodejs version >=14 <=16 (nodejs 12 reached End-of-Life on 30 April 2022)
- minimum mariadb supported version >= 10.5.2

##### **CHANGES**:
  - new Tag page
  - new Place page
  - new search flow
  - new meta-tag-place / group / collection page
  - new time selection widget
  - allow footer links reordering
  - new Docker image (smaller and faster)
  - add GANCIO_DB_PORT environment
  - restrict new tag entropy (trim, merge case insensitive)
  - add dynamic sitemap.xml
  - calendar attributes refactoring (a dot each day, colors represents n. events)
  - fix event mime type response
  - fix mariadb JSON fields
  - new gancio CLI accounts management (list / create / remove / modify accounts)
  - improve smtp setup, allow local sendmail, smpt port, tls/starttls
  - redirect to path based on content type request
  - add Slovak translation
  - lot of fixes

### 1.4.4 - 10 may '22
  - better img rendering, make it easier to download flyer #153
  - avoid place and tags duplication (remove white space, match case insensitive)
  - show date and place to unconfirmed events
  - add warning when visiting from different hostname or protocol #149
  - add tags and fix html description in ics export
  - add git dependency in Dockerfile #148
  - add external_style param to gancio-events webcomponent
  - add GANCIO_HOST and GANCIO_PORT environment vars
  - fix place and address when importing from url #147
  - fix user account removal
  - fix timezone issue #151
  - fix scrolling behavior
  - fix adding event on disabled anon posting
  - fix plain description meta
  - fix recurrent events always shown #150
  - remove `less` and `less-loader` dependency

### 1.4.3 - 10 mar '22
  - fix [#140](https://framagit.org/les/gancio/-/issues/140) - Invalid date
  - fix [#141](https://framagit.org/les/gancio/-/issues/141) - Cannot change logo
  - fix same day events
  - add missing icons in admin
  - prepare multisite settings
  - improve initialization
  - start unit testing API (it's never too late)

### 1.4.1 - 4 mar '22
  - add gl/galego locale, thanks @xosem
  - fix import redirect loop
  - add missing icons (close, repeat, arrows ...)
  - turn rss icon into a real link to improve a11y
  - force seconds to 0 for each events, fix recurring events starting date issue
  - fix next/prev selection on same datetime events
  - improve moderation UI (add author and event link + format creation date)
  - refactoring resource UI from fedi

### 1.4.0 - 9 feb '22
  - improve Cumulative Layout Shift
  - remove filename as default media label to avoid leak metadata
  - add endData to microdata
  - security fix with filtering settings, avoid sharing SMTP pass with front-end
  - fix broken SMTP
  - remove global materialicons / vuetify css, use threeshake and @nuxt/vuetify (really improve lighthouse score)
  - new Dockerfile using node:17.4-slim as base img (from 1.5Gb to ~800Mb)
  - add XSS and path traversal mitigation
  - improve a11y
  - update deps

### 1.3.3 - 1 feb '22
  - security fix, avoid sharing smtp pass with front-end

### 1.3.2 - 1 feb '22
  - fix webcomponent for event without img

### 1.3.1 - 1 feb '22
  - inherits tags in recurring events [#138](https://framagit.org/les/gancio/-/issues/138)
  - you can now skip an occurrence of a recurring event
  - fix `show_recurrent` event in webcomponent and API
  - add new webcomponent `sidebar` attribute and a [`fullwith` layout](https://gancio.org/usage/embed#embed-event-lists)

### 1.3.0 - 26 gen '22
  - add mariadb support
  - add [microdata](https://developer.mozilla.org/en-US/docs/Web/HTML/Microdata) support
  - support db setup via environment variables (used in updated `docker-compose.yml` files)
  - improve rss feed:
    - fix validation
    - add enclusure media for featured image
    - add categories
  - fix typo in export code
  - add theme attribute to gancio-events webcomponent (dark/light)
  - increase thumbs quality
  - improve logo for light theme
  - improve [wordpress plugin](https://wordpress.org/plugins/wpgancio/)
    - add \[gancio-event\] and \[gancio-events\] shortcode
    - allow gancio-events / gancio-event tags in editor
    - automatically enqueue webcomponent script
  - tags/places filters are now inclusive not exclusive
  - fix image undefined alternative text
  - update documentation, dependencies, translations

### 1.2.2 - 7 dic '21
  - shiny new gancio-event\[s\] webcomponents => [docs](https://gancio.org/usage/embed)
  - new backend plugin system => [docs](https://gancio.org/dev/plugins)
  - improve media focal point selection
  - improve non-js experience (load img, use native lazy loading)
  - improve user_confirm / recover code flow
  - permit admins to choose user password (usefull on instance without SMTP configuration)
  - fix task manager exception
  - fix db initialization when a custom setup is used, #131
  - remove vue-clipboard2 dependency due to [this](https://github.com/euvl/v-clipboard/issues/18) bug and using a [native with fallback mixin instead](./assets/clipboard.js)
  - fix a regression to support old CPU, #130
  - makes dialog use fullscreen on mobile
  - fix Delete AP Actor Action from fediverse when remote Actor is gone
  - add `max` param to /events API

### 1.2.1 - 11 nov '21
  - fix `Note` remove from fediverse
  - AP Actor is now `Application`, was `Person`
  - better handling event AP representations

  this release is a step forward to improve AP compatibility with other platforms, thanks @tcit

### 1.2.0 - 9 nov '21
  - do not overwrite event slug when title is modified to preserve links
  - add public cache to events images
  - fix baseurl in initial setup configuration
  - fix user removal
  - load settings during startup and not for each request
  - refactoring user custom locale
  - published AP event's type is not `Note` anymore but `Event`

### 1.1.1 - 29 ott '21
  - fix issue adding event with dueHour resulting in `bad request`
  - fix restart during setup
  - do not use @nuxt/vuetify module, manually preload vuetify via plugin
  - remove deprecated nuxt-express-module and use serverMiddleware directly

### 1.1.0 - 26 ott '21

  - a whole new setup via web! fix #126
  - new SMTP configuration dialog, fix #115
  - re-order general settings in admin panel
  - new dark/light theme setting
  - move quite all configuration into db
  - fix some email recipients
  - fix hidden events when not ended
  - update translations
  - improve install documentation
  - add systemd gancio.service
  - allow italic and span tags inside editor
  - remove moment-timezone, consola, config, inquirer dependencies
  - update deps

### 1.0.6 (alpha)
  - fix Dockerfile yarn cache issue on update, #123
  - fix overflow on event title @homepage
  - better import dialog on mobile
  - re-add attachment to AP
  - fix max event export
  - update deps

### 1.0.5 (alpha)
  - fix/improve debian install docs
  - fix ics export, use new ics package
  - use slug url everywhere (rss feed, embedded list)
  - use i18n in event confirmation email
  - remove lot of deps warning and remove some unused dependencies
  - fix show_recurrent in embedded list
  - remove old to-ico dep, use png favicon instead

### 1.0.4 (alpha)
  - shows a generic img for events without it

### 1.0.3 (alpha)
  - 12 hour clock selection, #119
  - improve media management
    - add alt-text to featured image, fix #106
    - add focalPoint support, fix #116
  - improve a11y
  - improve node v16 compatibility
  - fix #122 ? (downgrade prettier)

### 1.0.2 (alpha)
  - improve oauth flow UI
  - [WordPress plugin](https://wordpress.org/plugins/wpgancio/)
  - fix h-event import
  - improve error logging (add stack trace to exception)
  - choose start date for recurreing events (#120)
  - fix user delete from admin

### 1.0.1 (alpha)

  - fix AP resource removal
  - improve AP resource UI
  - fix Docker setup
  - update deps

### 1.0 (alpha)
This release is a complete rewrite of frontend UI and many internals, main changes are:

- Switch UI framework from [element](https://element.eleme.io/) to [vuetify](https://vuetifyjs.com/)
- Distribute package directly from site instead of using npm registry
- Improve docker setup (run as user, fix some data export)
- New logging system (based on [winston](https://github.com/winstonjs/winston))
- Slugify event URL (keeping old one valid)
- Import events from ics and external website using h-event (microformat) improving [`h-event`](https://microformats.org/wiki/h-event) export
- Hide unconfirmed tags and places
- Clean unused places and tags
- Fix tons of issues


### 0.24.0
- New Euskara language from Basque Country, thanks @hacklabkelo
- fix feed with filters
- cleaner homepage
- fix next/prev for recurrent events
- fix some history navigation issue
- fix blank lines in description
- upgrade deps
- better custom logo management
- fix settings update

### 0.23.0
- send AP Event Object instead of Note
- show only future unconfirmed events in admin panel
- new polish locale
- add friendly instances (an additional menu is shown)
- use user's logo not project's logo in federation
- start WPGancio plugin
- support media upload via url (API only)
- confirm before remove a resource
- confirm before remove a friendly instance
- event description supports some html tag
- fix redirect after login

### 0.22.0
- add admin announcement support (fix #74)
- each instance has a specific timezone you can choose from admin's panel
- refactoring language management (you can choose a default instance's language):
  usually UX language is choosen looking at Accepted-Language header but there
  are messages not generated from an http request (eg. sending events via AP).
  In those cases a default instance's language is choosen (default 'en').
- use lazy loaded images
- better mobile experience for admins
- single day only recurring events
- fix user block in fediverse moderation
- filter and linkify content from fediverse
- add a lot of help strings in admin panel
- use html2text for event description in og: meta
- update deps
- fix a moment.js typo from/to issue
- fix #73

### 0.21.0
- a new recurring events logic (a la taskwarrior):
  - each occurrence of a recurring event could be personalized.
  - occurrence of recurring events are skippable.
  - occurrence generation could be paused.
- support `h-event` microformats! in homepage and in any single event's page
- add a background task manager (email, recurring events creation)
- sanitize html content coming from fediverse and event description with dompurify
  - also remove `fbclid` params in links
- front end search optimization
- use oauth2 for everything, password flow for webclient, this also fix
  some issue with authentication
- clickable tags / places @ home (to add them as filters)
- use a cleaner menububble for the new editor
- add local smtp and sendmail options on configuration setup
- check permission for resource removal request from fediverse
- add resource from fediverse also when inReplyTo is another resource
- automatic API documentation inclusion in docs
- split moderation in another tab inside admin panel
- use axios instead of fetch everywhere
- lot of ux improvements & error handling
- search links in event description with linkifyjs while add/edit events
- remove text templates for emails and use html2text instead
- fix email unique index for users!


### 0.20.0
  - New layout (navbar/footer/visible filters)
  - two month calendar on large display
  - admin could edit title, description, about, favicon & logo directly form admin panel
  - new add event layout => https://demo.gancio.org/add
  - new editor to describe events (bold, italic, link) supported also using copy/paste
  - the editor also support live markdown (try using ### at line start)
  - start oauth2 server implementation (documentation: https://gancio.org/dev/oauth)
  - add fediverse moderation
  - fix embedding an event via iframe
  - images converted in .webp
  - new catalan translation, thanks @fadelkon

### 0.17.14
- [locale] add catalan
- [fix] fedi outbox

### 0.17.12
- [ui] add admin section on event page in mobile #63
- [fix] remove username from users

### 0.17.11
- [refactor] s/fed_user/ap_user
- [fedi] admin moderation

### 0.17.10
- [refactor] s/comment/resource/
- [refactor] remove `username` field
- [doc] about and federation

### 0.17.8
- [fix] use thumb in head og:img only

### 0.17.7
- [fix] #58 wrong url for RSS feed

### 0.17.5
- [fedi] comments moderation
- [fedi] user moderation
- [fedi] instance moderation
- [hotfix] cli setup
- [doc] fix debian upgrade
- [fix] comment ap_id key length
- [fix] fediverse signature
- [fedi] better /inbox /followers response

### 0.17.0
- [feat] add rss link @homepage
- [ui] add lot of explanation text
- [ui] show copied messages
- [admin] show n of unconfirmed users/events
- [ui] spinner while event image is loading
- [fedi] add follow me dialog in event
- [fix] do not add reminders in full ics export
- [fix] remove spaces from hashtags sent via AP
- [fix] #56 unconfirmed event sent via ap
- [fix] localPosts/comments in fediverse stats

### 0.16.0
- [feat] embed event as widget in external website
- [fedi] instances moderation in admin
- [fix] toggle event visibility by owner
- [fedi] manage unboost
- [refactoring] auth as middleware

### 0.15.7
- [fix] minor

### 0.15.6
- [fix] tags in event

### 0.15.5
- [model] migrations setup
- [feat] embeddable event widget/iframe

### 0.15.2
- [fix] delete event
- [fix] wrong html hierarchy

### 0.15.0
- [fix] backtop icon on mobile
- [fix] webfinger nodeinfo return real node info
- [fix] register email confirmation
- [feat] add federation settings (enable comments/boost/like)
- [feat] new event page layout
- [feat] could download .ics of event
- [feat] add cors to feed requests
- [refactoring] settings middleware, cleaning codebase

### 0.14.18
- [improve] better quality for images
- [fix] password recovery email
- [feat] new action field for notification
- [feat] add DEBUG env variable in docker-compose.yml
- [style] fixed width in confirmation events table
- [fix] #38 timezone issue in rss export and using tor...

### 0.14.17
- [fix] image previews from external website
- [fix] docker-compose postgresql docs
- [improve] export white logo to fediverse
