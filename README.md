# Node.js Benchmark Operations

To eliminate any potential variability introduced by a shared runner,
the benchmarks are executed on a dedicated Linode machine.

## Usage

This repository provides benchmarks for basic operations to aid in determining a high-performance solution.

All the benchmarks are stored in `RESULTS-{Node-Version}.md`

- [v16](./RESULTS-v16.md)
- [v18](./RESULTS-v18.md)
- [v19](./RESULTS-v19.md)

It also stores the last 3 versions of each active release line. You can check it inside its respective folder:

- [v16](./v16)
- [v18](./v18)
- [v19](./v19)

This is useful to identify regressions in minor/patch versions.

## Performance Parity across node versions

These results aim to compare http libraries between versions of Node.js

- [v14](./RESULTS-HTTP-v14.md)
- [v16](./RESULTS-HTTP-v16.md)
