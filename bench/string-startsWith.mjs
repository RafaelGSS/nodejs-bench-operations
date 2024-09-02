import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('startsWith comparison')
const shortString = 'foobar'
const longString = 'foobar'.repeat(100)

const comparison = 'foo'
const comparison2 = 'bar'

suite
  .add('(short string) (true) String#startsWith', function () {
    return shortString.startsWith(comparison)
  })
  .add('(short string) (true) String#slice and strict comparison', function () {
    return shortString.slice(0, comparison.length) === comparison
  })
  .add('(long string) (true) String#startsWith', function () {
    return longString.startsWith(comparison)
  })
  .add('(long string) (true) String#slice and strict comparison', function () {
    return longString.slice(0, comparison.length) === comparison
  })
  .add('(short string) (false) String#startsWith', function () {
    return shortString.startsWith(comparison2)
  })
  .add('(short string) (false) String#slice and strict comparison', function () {
    return shortString.slice(0, comparison2.length) === comparison2
  })
  .add('(long string) (false) String#startsWith', function () {
    return longString.startsWith(comparison2)
  })
  .add('(long string) (false) String#slice and strict comparison', function () {
    return longString.slice(0, comparison2.length) === comparison2
  })

await suite.runAndPrintResults()
