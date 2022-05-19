const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;

suite.add('Using String()', function () {
  const date = new Date()
  const value = String(date)
})
.add('Using brackets {}', function () {
  const date = new Date()
  const value = `${date}`
})
.add('Using \'\' + ', function() {
  const date = new Date()
  const value = '' + date
})
.add('Using date.toString()', function() {
  const date = new Date()
  const value = date.toString()
})
.on('cycle', function(event) {
  console.log(String(event.target));
})
.run({ 'async': false });
