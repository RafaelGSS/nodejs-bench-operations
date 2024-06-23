import { skipIfVersion } from '../utils.mjs'
import { Readable } from 'node:stream'
import { ReadableStream } from 'node:stream/web'
import assert from 'node:assert'
import { createBenchmarkSuite } from '../common.mjs'

skipIfVersion('<= 16.5.0')

const suite = createBenchmarkSuite('Stream.Readable')

suite
  .add('streams.Readable reading 1e3 * "some data"', async () => {
    function* readImpl(_sizeT) {
      let i = 0
      while (i < 1e3) {
        yield 'some data'
        ++i
      }
    }
    const readable = Readable.from(readImpl())

    for await (const _ of readable) {
      assert.ok(_)
    }
  },
  )
  .add('streams.web.Readable reading 1e3 * "some data"', async () => {
    let i = 0
    const readable = new ReadableStream({
      pull: function (controller) {
        controller.enqueue('some data')
        ++i
        if (i >= 1e3) {
          controller.close()
        }
      },
    })

    for await (const _ of readable) {
      assert.ok(_)
    }
  },
  )

await suite.runAndPrintResults()
