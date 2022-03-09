const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;

suite.add('Function returning null', function () {
  const test = new Function('test', 'return null');
  const a = test();
})
.add('Function returning explicitly undefined', function () {
  const test = new Function('test', 'return undefined');
  const a = test();
})
.add('Function returning implicitly undefined', function () {
  const test = new Function('test', 'return');
  const a = test();
})
.add('Function returning string', function () {
  const test = new Function('test', 'return "test"');
  const a = test();
})
.add('Function returning integer', function () {
  const test = new Function('test', 'return 1');
  const a = test();
})
.add('Function returning float', function () {
  const test = new Function('test', 'return 1.2');
  const a = test();
})
.add('Function returning functions', function () {
  const test = new Function('test', 'return function() {}');
  const a = test();
})
.add('Function returning arrow functions', function () {
  const test = new Function('test', 'return () => {}');
  const a = test();
})
.add('Function returning empty object', function () {
  const test = new Function('test', 'return {}');
  const a = test();
})
.add('Function returning empty array', function () {
  const test = new Function('test', 'return []');
  const a = test();
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({ 'async': false });
