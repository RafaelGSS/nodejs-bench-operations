const Benchmark = require('benchmark')
const { versions } = require('process')
const semver = require('semver')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite.add('Using Object.keys()', function () {
  const object = {
    a: 'somestring',
    b: 42,
    c: false
  }
  const keys = Object.keys(object)
})
.add('Using Object.getOwnPropertyNames()', function () {
  const object = {
    a: 'somestring',
    b: 42,
    c: false
  }
  const keys = Object.getOwnPropertyNames(object)
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Object.keys vs Object.getOwnPropertyNames comparison'))
  console.log(tableHeader)
})
.run({ 'async': false });