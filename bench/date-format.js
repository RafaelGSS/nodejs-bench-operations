const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

const twoDigitsLocaleOptions = {
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  day: '2-digit',
  month: '2-digit',
};

const df = new Intl.DateTimeFormat()
const dfWithOptions = new Intl.DateTimeFormat(undefined, twoDigitsLocaleOptions);

suite.add('Intl.DateTimeFormat().format(Date.now())', function () {
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
.add('Reusing dfWithOptions.format(Date.now())', function () {
  dfWithOptions.format(Date.now())
})
.add('Reusing dfWithOptions.format(new Date())', function () {
  dfWithOptions.format(new Date())
})
.add('Date.toLocaleDateString()', function () {
  new Date().toLocaleDateString()
})
.add('Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)', function () {
  new Date().toLocaleDateString(undefined, twoDigitsLocaleOptions);
})
.add('Format using date.get*', function() {
  const date = new Date()
  const formated = `${date.getMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}`
})
.add('new Date() (Baseline)', function() {
  new Date()
})
.add('Date.now() (Baseline)', function() {
  Date.now()
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Date format MM/DD/YYYY'))
  console.log(tableHeader)
})
.run({ 'async': false });
