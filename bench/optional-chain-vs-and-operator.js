const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

const validObj = {
  field: {
    field2: 'example data'
  }
}

const nullObj = {
  foo: {
    field2: 'example data'
  }
}

suite
.add('Using optional chain (obj.field?.field2) (Valid)', function () {
  validObj.field?.field2
})
.add('Using optional chain (obj.field?.field2) (undefined)', function () {
  nullObj.field?.field2
})
.add('Using and operator (obj.field && obj.field.field2) (Valid)', function () {
  validObj.field && validObj.field.field2
})
.add('Using and operator (obj.field && obj.field.field2) (undefined)', function () {
  nullObj.field && nullObj.field.field2
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Optional Chain (?) vs && operator'))
  console.log(tableHeader)
})
.run({ 'async': false });
