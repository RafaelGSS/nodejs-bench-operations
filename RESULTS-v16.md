# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Thu Mar 17 2022 17:42:22 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,294,638 ops/sec ±0.31% (97 runs sampled)
Function returning explicitly undefined x 1,268,093 ops/sec ±0.09% (93 runs sampled)
Function returning implicitly undefined x 1,279,588 ops/sec ±0.34% (89 runs sampled)
Function returning string x 1,278,815 ops/sec ±0.15% (98 runs sampled)
Function returning integer x 1,306,374 ops/sec ±0.35% (96 runs sampled)
Function returning float x 1,291,028 ops/sec ±0.17% (98 runs sampled)
Function returning functions x 1,260,827 ops/sec ±0.33% (95 runs sampled)
Function returning arrow functions x 1,246,163 ops/sec ±0.19% (94 runs sampled)
Function returning empty object x 1,295,087 ops/sec ±0.17% (96 runs sampled)
Function returning empty array x 1,276,466 ops/sec ±0.35% (93 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 753,838 ops/sec ±2.84% (74 runs sampled)
Using ? operator to avoid rejection x 824,893 ops/sec ±2.62% (80 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,977,202 ops/sec ±0.20% (97 runs sampled)
Raw usage underscore usage x 7,370,229 ops/sec ±0.18% (96 runs sampled)
Manipulating private properties using # x 2,670,378 ops/sec ±0.38% (95 runs sampled)
Manipulating private properties using underscore(_) x 699,881,990 ops/sec ±0.11% (90 runs sampled)
Manipulating private properties using Symbol x 698,675,283 ops/sec ±0.09% (98 runs sampled)
Manipulating private properties using PrivateSymbol x 26,694,639 ops/sec ±1.03% (90 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,544 ops/sec ±14.74% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 398 ops/sec ±0.53% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,606 ops/sec ±0.47% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 980 ops/sec ±15.67% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
