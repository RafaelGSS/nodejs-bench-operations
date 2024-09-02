import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Node.js Error')

suite
  .add('Error', function () {
    return new Error('test')
  })
  .add('NodeError', function () {
    return new TypeError('test')
  })
  .add('NodeError Range', function () {
    return new RangeError('test')
  })

await suite.runAndPrintResults()
