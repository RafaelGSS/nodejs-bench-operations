const Benchmark = require('benchmark')
const suite = new Benchmark.Suite;
const { Readable } = require('node:stream')
const { ReadableStream } = require('node:stream/web')
const { H2 } = require('../markdown')

suite.add('streams.Readable reading 1e3 * "some data"', {
  defer: true,
  fn: async function (deferred) {
    function * readImpl(_sizeT) {
      let i = 0
      while(i < 1e3) {
        yield 'some data'
        ++i
      }
    }
    const readable = Readable.from(readImpl())

    try {
      for await (const _ of readable) {}
      deferred.resolve()
    } catch (e) {
      deferred.reject(e)
    }
  }
})
.add('streams.web.Readable reading 1e3 * "some data"', {
  defer: true,
  fn: async function (deferred) {
    let i = 0
    const readable = new ReadableStream({
      pull: function (controller) {
        controller.enqueue('some data')
        ++i
        if (i >= 1e3) {
          controller.close()
        }
      }
    })

    try {
      for await (const _ of readable) {}
      deferred.resolve()
    } catch (e) {
      deferred.reject(e)
    }
  }
})
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('start', function() {
  console.log(H2('Stream.Readable'))
  console.log('```')
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
  console.log('```')
})
.run();
