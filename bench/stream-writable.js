const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { Writable } = require('stream')
const { WritableStream } = require('stream/web')

suite.add('streams.Writable writing 1e3 * "some data"', function () {
  const writable = new Writable({
    write (chunk, enc, cb) {
      cb()
    }
  })

  let i = 0
  while(i < 1e3) {
    writable.write('some data')
    ++i
  }
})
.add('streams.web.WritableStream writing 1e3 * "some data"', function () {
  const writable = new WritableStream({
    write (chunk, enc, cb) {}
  })

  const writer = writable.getWriter()

  let i = 0
  while(i < 1e3) {
    writer.write('some data')
    ++i
  }
})
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
.run();
