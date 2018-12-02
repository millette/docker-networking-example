'use strict'

// self
const { prep, listen } = require('.')

const fastify = prep()

// These are only available within docker
fastify.get('/', async (request, reply) => ({ hello: 'world' }))
fastify.get('/self', async (request, reply) => ({ hello: 'self-b' }))
fastify.get('/self2', async (request, reply) => ({ hello: 'self2' }))
fastify.get('/cant', async (request, reply) => ({ hello: 'cant' }))

listen(fastify)
  .then(console.log)
  .catch(console.error)
