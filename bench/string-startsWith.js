const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Check if string starts with a substring')
const shortString = 'foobar'
const longString = 'foobar'.repeat(100)

const comparison = 'foo'
const comparison2 = 'bar'

suite.add('(short string) (true) String#startsWith', function () {
    shortString.startsWith(comparison)
    }
).add('(short string) (true) String#slice and strict comparison', function () {
    shortString.slice(0, comparison.length) === comparison
    }
)
.add('(long string) (true) String#startsWith', function () {
    longString.startsWith(comparison)
    }
).add('(long string) (true) String#slice and strict comparison', function () {
    longString.slice(0, comparison.length) === comparison
    }
)
.add('(short string) (false) String#startsWith', function () {
    shortString.startsWith(comparison2)
    }
).add('(short string) (false) String#slice and strict comparison', function () {
    shortString.slice(0, comparison2.length) === comparison2
    }
).add('(long string) (false) String#startsWith', function () {
    longString.startsWith(comparison2)
    }
).add('(long string) (false) String#slice and strict comparison', function () {
    longString.slice(0, comparison2.length) === comparison2
    }
).run({ async: false })
