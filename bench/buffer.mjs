import { createBenchmarkSuite } from '../common.mjs';

const suite = createBenchmarkSuite('Buffer')

for (const size of [128, 1024, 4096, 16384]) {
  suite.add(`Buffer.alloc(${size})`, function () {
    const result = Buffer.alloc(size)
    return result
  });

  suite.add(`Buffer.allocUnsafe(${size})`, function () {
    const result = Buffer.allocUnsafe(size)
    return result
  });
}

await suite.runAndPrintResults()
