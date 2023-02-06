const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { eventToMdTable, H2, createTableHeader } = require('../markdown')

const tableHeader = createTableHeader([
  'name',
  'ops/sec',
  'samples'
])

const getterObj = {
  get test() {
    return 'Hello';
  },
};

const methodObj = {
  test() {
    return 'Hello';
  },
};

const defineObj = {};

Object.defineProperty(defineObj, 'test', {
  get() {
    return 'Hello';
  },
});

suite
.add('Getter', function () {
  const v = getterObj.test;
})
.add('Method', function () {
  const v = methodObj.test();
})
.add('DefineProperty', function () {
  const v = defineObj.test;
})
.on('cycle', function(event) {
  console.log(eventToMdTable(event))
})
.on('start', function() {
  console.log(H2('Property Getter Access'))
  console.log(tableHeader)
})
.run({ 'async': false });
