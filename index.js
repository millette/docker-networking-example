'use strict'

// npm
const fastify = require('fastify')

const prep = () => {
  const fastify666 = fastify({ logger: true })
  const backendHeader = `x-backend-v2-${Math.floor(Math.random() * 1000)}`
  fastify666.addHook('onSend', async (request, reply) => {
    reply.header(backendHeader, process.env.HOSTNAME)
  })
  return fastify666
}

const listen = (fast) =>
fast.listen(3000, process.env.HOSTNAME)
  .then((address) => `server listening on ${address} / ${process.env.HOSTNAME}`)

module.exports = {
  prep, listen
}
