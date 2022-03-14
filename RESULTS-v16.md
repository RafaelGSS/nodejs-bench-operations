# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Mon Mar 14 2022 14:49:41 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,164,216 ops/sec ±1.99% (87 runs sampled)
Function returning explicitly undefined x 1,182,442 ops/sec ±0.49% (94 runs sampled)
Function returning implicitly undefined x 1,191,315 ops/sec ±0.39% (96 runs sampled)
Function returning string x 1,182,284 ops/sec ±0.33% (95 runs sampled)
Function returning integer x 1,160,987 ops/sec ±0.64% (96 runs sampled)
Function returning float x 1,183,986 ops/sec ±0.27% (92 runs sampled)
Function returning functions x 1,151,672 ops/sec ±0.58% (96 runs sampled)
Function returning arrow functions x 1,163,021 ops/sec ±0.26% (88 runs sampled)
Function returning empty object x 1,192,642 ops/sec ±0.32% (94 runs sampled)
Function returning empty array x 1,175,491 ops/sec ±0.60% (94 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,524,022 ops/sec ±0.46% (92 runs sampled)
Raw usage underscore usage x 6,026,236 ops/sec ±0.77% (95 runs sampled)
Manipulating private properties using # x 2,289,582 ops/sec ±0.59% (93 runs sampled)
Manipulating private properties using underscore(_) x 601,576,717 ops/sec ±0.25% (92 runs sampled)
Manipulating private properties using Symbol x 595,562,521 ops/sec ±0.68% (92 runs sampled)
Manipulating private properties using PrivateSymbol x 23,248,263 ops/sec ±1.25% (92 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,390 ops/sec ±17.34% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 344 ops/sec ±0.70% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
