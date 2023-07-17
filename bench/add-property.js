const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples',
])

suite.add('Directly in the object', function () {
  const data = { test: 'Hello' }
})
.add('Using dot notation', function () {
  const data = { }
  
  data.test = 'Hello';
})
.add('Using define property (writable)', function () {
  const data = { }
  
  Object.defineProperty(data, 'test', {
    value: 'Hello',
    writable: true,
    enumerable: true,
    configurable: true,
  })
})
.add('Using define property initialized (writable)', function () {
  const data = { test: undefined }
  
  Object.defineProperty(data, 'test', {
    value: 'Hello',
    enumerable: true,
    configurable: true,
  });
})
.add('Using define property (getter)', function () {
  const data = { }
  
  Object.defineProperty(data, 'test', {
    get() {
      return 'Hello';
    },
    enumerable: true,
    configurable: true,
  })
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Adding property'))
  console.log(tableHeader)
})
.run({ 'async': false });
