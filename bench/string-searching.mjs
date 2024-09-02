import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('String searching')

const text = 'text/html,application/xhtml+xml,application/xml;application/json;q=0.9,image/avif,image/webp,*/*;q=0.8'
const regex = /application\/json/

suite
  .add('Using includes', function () {
    return text.includes('application/json')
  })
  .add('Using indexof', function () {
    return text.indexOf('application/json') !== -1
  })
  .add('Using RegExp.test', function () {
    return /application\/json/.test(text)
  })
  .add('Using RegExp.text with cached regex pattern', function () {
    return regex.test(text)
  })
  .add('Using new RegExp.test', function () {
    return new RegExp('application/json').test(text)
  })
  .add('Using new RegExp.test with cached regex pattern', function () {
    return new RegExp(regex).test(text)
  })

await suite.runAndPrintResults()
