const Benchmark = require('benchmark')
const { eventToMdTable, H2, createTableHeader } = require('../markdown')
const suite = new Benchmark.Suite;

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

const k = 'abcdefghijklmnopqrstuvz'
const o = '1'
const l = '2'

suite.add('Using + sign', function () {
  k + '-' + o + '-' + l
})
.add('Using backtick (`)', function () {
  `${k}-${o}-${l}`
})
.add('Using array.join', function () {
  [k, o, l].join('-')
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('String concat'))
  console.log(tableHeader)
})
.run();
