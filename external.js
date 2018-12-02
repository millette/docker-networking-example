'use strict'

// npm
const got = require('got')

// self
const { prep, listen } = require('.')

const fastify = prep()

// Proxy examples
// hostnames are provided by docker

// Proxy thru self, using own hostname
fastify.get('/thru-self', async (request, reply) => got.stream(`http://${process.env.HOSTNAME}:3000/`))

// Proxy thru self, using "external" hostname
fastify.get('/thru-external', async (request, reply) => got.stream(`http://external:3000/`))

// Proxy thru internal server, using "internal" hostname
fastify.get('/thru-internal', async (request, reply) => got.stream(`http://internal:3000/self2`))

// A few direct routes
fastify.get('/', async (request, reply) => ({ hello: 'world' }))
fastify.get('/self', async (request, reply) => ({ hello: 'self-a' }))
fastify.get('/self3', async (request, reply) => ({ hello: 'self3' }))

listen(fastify)
  .then(console.log)
  .catch(console.error)
