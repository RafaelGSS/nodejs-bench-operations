const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

const df = new Intl.DateTimeFormat()

suite.add('Intl.DateTimeFormat().format(Date.now())', function () {
  new Intl.DateTimeFormat().format(Date.now())
})
.add('Intl.DateTimeFormat().format(new Date())', function () {
  new Intl.DateTimeFormat().format(new Date())
})
.add('Reusing Intl.DateTimeFormat()', function () {
  df.format(Date.now())
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
