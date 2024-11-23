import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Object Creation')

function EmptyPrototype() {}
EmptyPrototype.prototype = Object.create(null)

class C {
  constructor () {}
}

suite
  .add('Object.create(null)', function () {
    return Object.create(null)
  })
  .add('Object.create({})', function () {
    return Object.create({})
  })
  .add('new Function with empty prototype', function () {
    return new EmptyPrototype()
  })
  .add('Empty class', function () {
    return new C()
  })

await suite.runAndPrintResults()
