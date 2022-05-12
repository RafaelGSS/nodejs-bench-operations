const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;

suite.add('Error', function () {
  new Error('test');
})
.add('NodeError', function () {
  new TypeError('test');
})
.add('NodeError Range', function () {
  new RangeError('test');
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({ 'async': false });
