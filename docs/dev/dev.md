---
layout: default
title: Hacking
permalink: /dev
nav_order: 5
has_children: true
---

### Development Stack

**Gancio** is built with following technologies:

- [Nuxt.js](https://nuxtjs.org/)
- [Vue.js](https://vuejs.org/)
- Express
- Node.js
- [Sequelize](https://sequelize.org/)
- [Vuetify](https://vuetifyjs.com/)

### Testing on your own machine

2. Download source
```bash
git clone https://framagit.org/les/gancio
```

3. Install dependencies
```bash
yarn
```

4. Run db migrations
```bash
./node_modules/.bin/sequelize db:migrate
```

5. Hacking
```bash
yarn dev
```

> warning "Warning"
> You need to register a first user, this will be an active administrator!

Please use the [issues](https://framagit.org/les/gancio/-/issues) to discuss any modification.
