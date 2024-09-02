import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('endsWith comparison')
const shortString = 'foobar'
const longString = 'foobar'.repeat(100)

const comparison = 'bar'
const comparison2 = 'foo'


suite
  .add('(short string) (true) String#endsWith', function () {
    return shortString.endsWith(comparison)
  })
  .add('(short string) (true) String#slice and strict comparison', function () {
    return shortString.slice(-comparison.length) === comparison
  })
  .add('(long string) (true) String#endsWith', function () {
    return longString.endsWith(comparison)
  })
  .add('(long string) (true) String#slice and strict comparison', function () {
    return longString.slice(-comparison.length) === comparison
  })
  .add('(short string) (false) String#endsWith', function () {
    return shortString.endsWith(comparison2)
  })
  .add('(short string) (false) String#slice and strict comparison', function () {
    return shortString.slice(-comparison2.length) === comparison2
  })
  .add('(long string) (false) String#endsWith', function () {
    return longString.endsWith(comparison2)
  })
  .add('(long string) (false) String#slice and strict comparison', function () {
    return longString.slice(-comparison2.length) === comparison2
  })

await suite.runAndPrintResults()
