const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Check if string ends with a substring')
const shortString = 'foobar'
const longString = 'foobar'.repeat(100)

const comparison = 'bar'
const comparison2 = 'foo'


suite.add('(short string) (true) String#endsWith', function () {
    shortString.endsWith(comparison)
    }
).add('(short string) (true) String#slice and strict comparison', function () {
    shortString.slice(-comparison.length) === comparison
    }
).add('(long string) (true) String#endsWith', function () {
    longString.endsWith(comparison)
    }
).add('(long string) (true) String#slice and strict comparison', function () {
    longString.slice(-comparison.length) === comparison
    }
).add('(short string) (false) String#endsWith', function () {
    shortString.endsWith(comparison2)
    }
).add('(short string) (false) String#slice and strict comparison', function () {
    shortString.slice(-comparison2.length) === comparison2
    }
).add('(long string) (false) String#endsWith', function () {
    longString.endsWith(comparison2)
    }
).add('(long string) (false) String#slice and strict comparison', function () {
    longString.slice(-comparison2.length) === comparison2
    }
).run({ async: false })
