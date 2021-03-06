const libPath = process.env.NODE_ENV === 'example' ? 'graphql-server-crud' : '../../src'
const { ModelBase } = require(libPath)

const { knex } = require('../db')

class Base extends ModelBase {
  knex = knex
  knexDebug = true
  logger = console.log

  // default limit and offset
  maxLimit = 100
  defaultLimit=50
  defaultOffset = 0

  // configure query timeout
  timeout = 5000
}

module.exports = { Base }
