import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Array.includes vs raw comparison')

suite
  .add('using Array.includes', function () {
    const httpVersion = '1.1'
    const exists = ['2.0', '1.0', '1.1'].includes(httpVersion)
    return exists
  })
  .add('using Array.includes (first item)', function () {
    const httpVersion = '2.0'
    const exists = ['2.0', '1.0', '1.1'].includes(httpVersion)
    return exists
  })
  .add('Using raw comparison', function () {
    const httpVersion = '1.1'
    const exists = httpVersion === '2.0' || httpVersion === '1.0' || httpVersion === '1.1'
    return exists
  })
  .add('Using raw comparison (first item)', function () {
    const httpVersion = '2.0'
    const exists = httpVersion === '2.0' || httpVersion === '1.0' || httpVersion === '1.1'
    return exists
  })

await suite.runAndPrintResults()
