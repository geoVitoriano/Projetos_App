const config = require('../knexfile.js')
const knex = require('knex')(config)
// Execução automatica das migrations
knex.migrate.latest([ config ])

module.exports = knex