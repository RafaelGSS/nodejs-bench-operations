# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.7.1`
* __Run:__ Mon Mar 14 2022 15:50:41 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,369,638 ops/sec ±0.33% (94 runs sampled)
Function returning explicitly undefined x 1,348,432 ops/sec ±0.78% (94 runs sampled)
Function returning implicitly undefined x 1,382,384 ops/sec ±0.44% (92 runs sampled)
Function returning string x 1,294,354 ops/sec ±0.22% (96 runs sampled)
Function returning integer x 1,365,120 ops/sec ±0.46% (93 runs sampled)
Function returning float x 1,373,940 ops/sec ±0.31% (97 runs sampled)
Function returning functions x 1,264,390 ops/sec ±0.25% (96 runs sampled)
Function returning arrow functions x 1,358,942 ops/sec ±0.24% (97 runs sampled)
Function returning empty object x 1,376,144 ops/sec ±0.29% (93 runs sampled)
Function returning empty array x 1,356,055 ops/sec ±0.36% (95 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,919,502 ops/sec ±0.19% (95 runs sampled)
Raw usage underscore usage x 7,486,046 ops/sec ±0.26% (97 runs sampled)
Manipulating private properties using # x 2,701,310 ops/sec ±0.43% (96 runs sampled)
Manipulating private properties using underscore(_) x 700,847,831 ops/sec ±0.14% (91 runs sampled)
Manipulating private properties using Symbol x 699,715,065 ops/sec ±0.10% (95 runs sampled)
Manipulating private properties using PrivateSymbol x 28,966,339 ops/sec ±0.74% (96 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,426 ops/sec ±16.77% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 412 ops/sec ±0.77% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,980 ops/sec ±0.47% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 941 ops/sec ±16.01% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
