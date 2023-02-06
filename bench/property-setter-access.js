const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

const getterObj = {
  privateTest: undefined,
  set test(value) {
    this.privateTest = value;
  },
};

const methodObj = {
  privateTest: undefined,
  test(value) {
    this.privateTest = value;
  },
};

const defineObj = {
  privateTest: undefined,
};

Object.defineProperty(defineObj, 'test', {
  set(value) {
    this.privateTest = value;
  },
});

suite
.add('Setter', function () {
  getterObj.test = 'Hello';
})
.add('Method', function () {
  methodObj.test('Hello');
})
.add('DefineProperty', function () {
  defineObj.test = 'Hello';
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Property Setter Access'))
  console.log(tableHeader)
})
.run({ 'async': false });
