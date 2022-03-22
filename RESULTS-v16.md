# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Thu Mar 17 2022 20:42:13 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 842,418 ops/sec ±1.21% (91 runs sampled)
Function returning explicitly undefined x 845,704 ops/sec ±0.76% (94 runs sampled)
Function returning implicitly undefined x 852,288 ops/sec ±0.81% (93 runs sampled)
Function returning string x 851,356 ops/sec ±0.65% (90 runs sampled)
Function returning integer x 854,598 ops/sec ±1.07% (89 runs sampled)
Function returning float x 855,348 ops/sec ±0.75% (94 runs sampled)
Function returning functions x 836,630 ops/sec ±0.36% (89 runs sampled)
Function returning arrow functions x 842,332 ops/sec ±0.86% (93 runs sampled)
Function returning empty object x 863,005 ops/sec ±0.42% (93 runs sampled)
Function returning empty array x 861,605 ops/sec ±0.40% (94 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 569,199 ops/sec ±2.55% (78 runs sampled)
Using ? operator to avoid rejection x 589,579 ops/sec ±2.48% (82 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,491,944 ops/sec ±0.60% (90 runs sampled)
Raw usage underscore usage x 6,503,013 ops/sec ±0.55% (90 runs sampled)
Manipulating private properties using # x 2,381,957 ops/sec ±0.54% (92 runs sampled)
Manipulating private properties using underscore(_) x 868,084,609 ops/sec ±21.00% (85 runs sampled)
Manipulating private properties using Symbol x 969,615,181 ops/sec ±0.38% (93 runs sampled)
Manipulating private properties using PrivateSymbol x 22,777,615 ops/sec ±0.47% (92 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,301 ops/sec ±29.04% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 313 ops/sec ±5.86% (82 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,572 ops/sec ±1.51% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 739 ops/sec ±24.07% (38 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
