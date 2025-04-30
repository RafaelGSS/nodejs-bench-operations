import { fileURLToPath } from 'node:url'
import fs from 'node:fs'
import zlib from 'node:zlib'
import { createBenchmarkSuite } from '../common.mjs'

const fixturePath = fileURLToPath(
  new URL('../fixtures/words_dictionary.json.gz', import.meta.url)
)
let fixtureData = fs.readFileSync(fixturePath)
fixtureData = zlib.gunzipSync(fixtureData)

const suite = createBenchmarkSuite('Compression algorithms', {
  tableHeaderColumns: ['name', 'total time', 'samples'],
  mode: 'time'
})

suite
  .add('Deflate', function () {
    zlib.deflateSync(fixtureData)
  })
  .add('Gzip', function () {
    zlib.gzipSync(fixtureData)
  })

await suite.runAndPrintResults()
