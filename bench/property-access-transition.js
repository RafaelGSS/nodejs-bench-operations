const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])



suite.add('Adding property after object creation - small object', function () {
  const obj = { a: 1, b: {}, c: '' }
  obj.d = true
  console.assert(obj.d)
})
.add('Adding property in the object creation - small object', function () {
  const obj = { a: 1, b: {}, c: '', d: true }
  console.assert(obj.d)
})
.add('Adding property after the function creation - small class', function () {
  function Klass() {
    this.a = 1
    this.b = {}
    this.c = ''
  }
  const obj = new Klass()
  obj.d = true
  console.assert(obj.d)
})
.add('Adding property in the function creation - small class', function () {
  function Klass() {
    this.a = 1
    this.b = {}
    this.c = ''
    this.d = true
  }
  const obj = new Klass()
  console.assert(obj.d)
})
.add('Adding property after the class creation - small class', function () {
  class Klass {
    constructor() {
      this.a = 1;
      this.b = {};
      this.c = '';
    }
  }
  const obj = new Klass()
  obj.d = true
  console.assert(obj.d)
})
.add('Adding property in the class creation - small class', function () {
  class Klass {
    constructor() {
      this.a = 1;
      this.b = {};
      this.c = '';
      this.d = true
    }
  }
  const obj = new Klass()
  console.assert(obj.d)
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Property access after shape transition'))
  console.log(tableHeader)
})
.run({ 'async': false });
