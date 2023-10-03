const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Deleting properties')

suite
  .add('Using delete property', function () {
    const data = { x: 1, y: 2, z: 3 }
    delete data.y

    data.x
    data.y
    data.z
  })
  .add('Using undefined assignment', function () {
    const data = { x: 1, y: 2, z: 3 }
    data.y = undefined

    data.x
    data.y
    data.z
  })
  .run({ async: false })
