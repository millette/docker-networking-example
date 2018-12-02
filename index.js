'use strict'

// npm
const fastify = require('fastify')

const backendHeader = `x-backend-${Math.floor(Math.random() * 1000)}`

// Add special header indicating which backend is responding
const prep = () => fastify({ logger: true }).addHook('onSend', async (request, reply) => {
  reply.header(backendHeader, process.env.HOSTNAME)
})

// HOSTNAME is provided by docker
const listen = (fast) => fast.listen(3000, process.env.HOSTNAME)
  .then((address) => `server listening on ${address} / ${process.env.HOSTNAME}`)

module.exports = { prep, listen }
