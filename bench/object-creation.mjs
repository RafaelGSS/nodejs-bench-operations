import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Object Creation')

function Empty() {}
Empty.prototype = Object.create(null)

suite
  .add('Object.create(null)', function () {
    return Object.create(null)
  })
  .add('Object.create({})', function () {
    return Object.create({})
  })
  .add('Cached Empty.prototype', function () {
    return new Empty()
  })
  .add('Empty.prototype', function () {
    function NE() {}
    NE.prototype = Object.create(null)
    return new NE()
  })
  .add('Empty class', function () {
    function C() {}
    return new C()
  })

await suite.runAndPrintResults()
