# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.7.1`
* __Run:__ Thu Mar 17 2022 16:46:36 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,344,883 ops/sec ±2.09% (93 runs sampled)
Function returning explicitly undefined x 1,335,164 ops/sec ±0.17% (97 runs sampled)
Function returning implicitly undefined x 1,373,596 ops/sec ±0.53% (88 runs sampled)
Function returning string x 1,373,826 ops/sec ±0.18% (95 runs sampled)
Function returning integer x 1,330,516 ops/sec ±0.37% (98 runs sampled)
Function returning float x 1,381,881 ops/sec ±0.24% (96 runs sampled)
Function returning functions x 1,329,878 ops/sec ±0.42% (97 runs sampled)
Function returning arrow functions x 1,344,914 ops/sec ±0.24% (94 runs sampled)
Function returning empty object x 1,369,180 ops/sec ±0.18% (98 runs sampled)
Function returning empty array x 1,358,546 ops/sec ±0.50% (95 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 781,703 ops/sec ±3.50% (75 runs sampled)
Using ? operator to avoid rejection x 803,830 ops/sec ±3.10% (78 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,943,570 ops/sec ±0.58% (85 runs sampled)
Raw usage underscore usage x 7,838,108 ops/sec ±6.70% (90 runs sampled)
Manipulating private properties using # x 3,059,286 ops/sec ±0.97% (84 runs sampled)
Manipulating private properties using underscore(_) x 762,343,529 ops/sec ±1.23% (92 runs sampled)
Manipulating private properties using Symbol x 762,018,236 ops/sec ±1.23% (91 runs sampled)
Manipulating private properties using PrivateSymbol x 31,436,233 ops/sec ±2.36% (94 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,501 ops/sec ±17.24% (79 runs sampled)
streams.web.Readable reading 1e3 * some data x 419 ops/sec ±0.86% (82 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,985 ops/sec ±0.41% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 997 ops/sec ±14.65% (55 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
