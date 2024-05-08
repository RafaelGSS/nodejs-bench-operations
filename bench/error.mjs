import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Node.js Error')

suite
  .add('Error', function () {
    new Error('test')
  })
  .add('NodeError', function () {
    new TypeError('test')
  })
  .add('NodeError Range', function () {
    new RangeError('test')
  })

await suite.runAndPrintResults()
