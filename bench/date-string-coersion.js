const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite.add('Using String()', function () {
  const date = new Date()
  const value = String(date)
})
.add('Using brackets {}', function () {
  const date = new Date()
  const value = `${date}`
})
.add('Using \'\' + ', function() {
  const date = new Date()
  const value = '' + date
})
.add('Using date.toString()', function() {
  const date = new Date()
  const value = date.toString()
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Date String coersion'))
  console.log(tableHeader)
})
.run({ 'async': false });
