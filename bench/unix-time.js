const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Getting unix time')

suite
  .add('new Date().getTime()', function () {
    new Date().getTime()
  })
  .add('Date.now()', function () {
    Date.now()
  })
  .run({ async: false })
