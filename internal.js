'use strict'

// self
const { prep, listen } = require('.')

const fastify = prep()

fastify.get('/', async (request, reply) => ({ hello: 'world' }))
fastify.get('/self', async (request, reply) => ({ hello: 'self-b' }))
fastify.get('/self2', async (request, reply) => ({ hello: 'self2' }))

listen(fastify)
  .then(console.log)
  .catch(console.error)
