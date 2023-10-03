const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('String searching')

const text = 'text/html,application/xhtml+xml,application/xml;application/json;q=0.9,image/avif,image/webp,*/*;q=0.8'
const regex = /application\/json/

suite
  .add('Using includes', function () {
    text.includes('application/json')
  })
  .add('Using indexof', function () {
    text.indexOf('application/json') !== -1
  })
  .add('Using RegExp.test', function () {
    ;/application\/json/.test(text)
  })
  .add('Using RegExp.text with cached regex pattern', function () {
    regex.test(text)
  })
  .add('Using new RegExp.test', function () {
    new RegExp('application/json').test(text)
  })
  .add('Using new RegExp.test with cached regex pattern', function () {
    new RegExp(regex).test(text)
  })
  .run()
