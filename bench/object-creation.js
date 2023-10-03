const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Object Creation')

function Empty() {}
Empty.prototype = Object.create(null)

suite
  .add('Object.create(null)', function () {
    Object.create(null)
  })
  .add('Object.create({})', function () {
    Object.create({})
  })
  .add('Cached Empty.prototype', function () {
    new Empty()
  })
  .add('Empty.prototype', function () {
    function NE() {}
    NE.prototype = Object.create(null)
    new NE()
  })
  .add('Empty class', function () {
    function C() {}
    new C()
  })
  .run({ async: false })
