const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

suite.add('Using if to check function existence', function () {
  const emptyObject = Object.create({})
  if (emptyObject.undefinedFunction) {
    emptyObject.undefinedFunction()
  }
})
.add('Using ? operator to avoid rejection', function () {
  const emptyObject = Object.create({})
  emptyObject.undefinedFunction?.()
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Possible undefined Function'))
  console.log(tableHeader)
})
.run({ 'async': false });
