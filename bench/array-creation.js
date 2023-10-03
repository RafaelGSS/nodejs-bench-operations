const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Array Creation')

suite
  .add('new Array', function () {
    new Array(1024 * 1024)
  })
  .add('Array.from', function () {
    Array.from({ length: 1024 * 1024 })
  })
  .run({ async: false })
