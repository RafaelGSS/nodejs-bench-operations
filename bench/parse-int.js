const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Parsing Integer')

suite
  .add('Using parseInt(x, 10) - small number (2 len)', function () {
    parseInt('5', 10)
  })
  .add('Using parseInt(x, 10) - big number (10 len)', function () {
    parseInt('9999999999', 10)
  })
  .add('Using + - small number (2 len)', function () {
    ;+'5'
  })
  .add('Using + - big number (10 len)', function () {
    ;+'9999999999'
  })
  .run({ async: false })
