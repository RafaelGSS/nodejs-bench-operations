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
  day: '2-digit',
  month: '2-digit',
};

const df = new Intl.DateTimeFormat()

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
.add('Date.toLocaleDateString()', function () {
  new Date().toLocaleDateString()
})
.add('Date.toLocaleDateString(undefined, twoDigitsLocaleOptions)', function () {
  new Date().toLocaleDateString(undefined, twoDigitsLocaleOptions);
})
.add('Format using date.get*', function() {
  const date = new Date()
  `${date.getMonth() + 1}/${date.getUTCDate()}/${date.getUTCFullYear()}`
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Date format MM/DD/YYYY'))
  console.log(tableHeader)
})
.run({ 'async': false });
