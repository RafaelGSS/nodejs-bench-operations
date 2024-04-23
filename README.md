# Node.js Benchmark Operations

~To eliminate any potential variability introduced by a shared runner,
the benchmarks are executed on a dedicated Linode machine~ (Sponsor me so I can use a dedicated machine 💚).

## Usage

This repository provides benchmarks for basic operations to aid in determining a high-performance solution.

All the benchmarks are stored in `RESULTS-{Node-Version}.md`

- [v18](./RESULTS-v18.md)
- [v20](./RESULTS-v20.md)
- [v21](./RESULTS-v21.md)

It also stores the last 3 versions of each active release line. You can check it inside its respective folder:

- [v18](./v18)
- [v20](./v20)
- [v21](./v21)

This is useful to identify regressions in minor/patch versions.

## Regression Checker

This repository contains an action to automatically identify regressions and improvements based on a 20% change - up or down

See: [check-regressions.yml](https://github.com/RafaelGSS/nodejs-bench-operations/actions/workflows/check_regressions.yml)

## Affiliates

Some projects have done some perfomance comparison on a dedicated topic.
Here is a usuful list:

- [Loops](https://github.com/simone-sanfratello/node-bench-iteration)

## Sponsors

Benchmark machines are sponsored by [NodeSource](https://nodesource.com/)
![NodeSource logo](https://github.com/RafaelGSS/nodejs-bench-operations/assets/55195249/9580c302-6f96-4d25-8d67-8a6c6d703bbf)
