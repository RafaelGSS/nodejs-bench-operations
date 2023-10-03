const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Object.keys vs Object.getOwnPropertyNames comparison')

suite
  .add('Using Object.keys()', function () {
    const object = {
      a: 'somestring',
      b: 42,
      c: false,
    }
    const keys = Object.keys(object)
  })
  .add('Using Object.getOwnPropertyNames()', function () {
    const object = {
      a: 'somestring',
      b: 42,
      c: false,
    }
    const keys = Object.getOwnPropertyNames(object)
  })
  .run({ async: false })
