import { createBenchmarkSuite } from '../common.mjs'

const suite = createBenchmarkSuite('Date format MM/DD/YYYY')

const twoDigitsLocaleOptions = {
  year: 'numeric',
  day: '2-digit',
  month: '2-digit',
}

const df = new Intl.DateTimeFormat()

suite
  .add('Intl.DateTimeFormat().format(Date.now())', function () {
    new Intl.DateTimeFormat().format(Date.now())
  })
  .add('Intl.DateTimeFormat().format(new Date())', function () {
    new Intl.DateTimeFormat().format(new Date())
  })
  .add('Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())', function () {
    new Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(Date.now())
  })
  .add('Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())', function () {
    new Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions).format(new Date())
  })
  .add('Reusing Intl.DateTimeFormat()', function () {
    df.format(Date.now())
  })
  .add('Date.toLocaleDateString()', function () {
    new Date().toLocaleDateString()
  })
  .add('Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)', function () {
    new Date().toLocaleDateString(undefined, twoDigitsLocaleOptions)
  })

await suite.runAndPrintResults()
