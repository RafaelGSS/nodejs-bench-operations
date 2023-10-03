const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Date toISOString')

const { fromUnixToISOString } = require('../utils/from-unix-to-iso-string')

suite
  .add('new Date().toISOString()', function () {
    new Date().toISOString()
  })
  .add('fromUnixToISOString(new Date())', function () {
    fromUnixToISOString(new Date())
  })
  .run({ async: false })
