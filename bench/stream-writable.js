const { skipIfVersion } = require('../utils')
skipIfVersion('<= 16.5.0')
const { Writable } = require('node:stream')
const { WritableStream } = require('node:stream/web')
const { createBenchmarkSuite } = require('../common')

const suite = createBenchmarkSuite('Stream.Writable')

suite
  .add('streams.Writable writing 1e3 * "some data"', function () {
    const writable = new Writable({
      write(chunk, enc, cb) {
        cb()
      },
    })

    let i = 0
    while (i < 1e3) {
      writable.write('some data')
      ++i
    }
  })
  .add('streams.web.WritableStream writing 1e3 * "some data"', function () {
    const writable = new WritableStream({
      write(chunk, enc, cb) {},
    })

    const writer = writable.getWriter()

    let i = 0
    while (i < 1e3) {
      writer.write('some data')
      ++i
    }
  })
  .run()
