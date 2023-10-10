const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Deleting properties')

const NullObject = function NullObject () { }
NullObject.prototype = Object.create(null)

const setupForMap = function () {
  const data = new Map();
  
  for (let i = 0; i < this.count; i++) {
    data.set(i.toString(), i);
  }
}

suite
  .add('Using delete property', function () {
    const data = { x: 1, y: 2, z: 3 }
    delete data.y

    data.x
    data.y
    data.z
  })
  .add('Using delete property (proto: null)', function () {
    const data = { __proto__: null, x: 1, y: 2, z: 3 }
    delete data.y

    data.x
    data.y
    data.z
  })
  .add('Using delete property (cached proto: null)', function () {
    const data = new NullObject()

    data.x = 1
    data.y = 2
    data.z = 3

    delete data.y

    data.x
    data.y
    data.z
  })
  .add('Using map.delete', function () {
    data.delete(this.count.toString())
  }, {
    setup: setupForMap,
  })
  .add('Using undefined assignment', function () {
    const data = { x: 1, y: 2, z: 3 }
    data.y = undefined

    data.x
    data.y
    data.z
  })
  .add('Using undefined assignment (proto: null)', function () {
    const data = { __proto__: null, x: 1, y: 2, z: 3 }
    data.y = undefined

    data.x
    data.y
    data.z
  })
  .add('Using undefined property (cached proto: null)', function () {
    const data = new NullObject()

    data.x = 1
    data.y = 2
    data.z = 3

    data.y = undefined

    data.x
    data.y
    data.z
  })
  .run({ async: false })
