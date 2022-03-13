const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { Readable } = require('stream')
const { ReadableStream } = require('stream/web')

suite.add('Stream native readable', {
  defer: true,
  fn: function (deferred) {
    const readable = new Readable({
      read: function * readImpl(_sizeT) {
        let i = 0
        while(i < 1e9) {
          yield 'some data'
          ++i
        }
        yield null
      }
    })

    readable.on('end', () => {
      deferred.resolve()
    })
  }
})
// .add('WebStream native readable', function () {
//   const test = new Function('test', 'return undefined');
//   const a = test();
// })
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Done')
})
.run();
