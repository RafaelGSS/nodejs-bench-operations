# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.7.1`
* __Run:__ Thu Mar 17 2022 17:42:25 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,348,640 ops/sec ±0.53% (95 runs sampled)
Function returning explicitly undefined x 1,332,663 ops/sec ±0.24% (98 runs sampled)
Function returning implicitly undefined x 1,319,624 ops/sec ±0.32% (94 runs sampled)
Function returning string x 1,369,802 ops/sec ±0.16% (96 runs sampled)
Function returning integer x 1,334,321 ops/sec ±0.60% (95 runs sampled)
Function returning float x 1,361,610 ops/sec ±0.27% (96 runs sampled)
Function returning functions x 1,341,681 ops/sec ±0.47% (96 runs sampled)
Function returning arrow functions x 1,347,819 ops/sec ±0.18% (96 runs sampled)
Function returning empty object x 1,382,011 ops/sec ±0.15% (97 runs sampled)
Function returning empty array x 1,354,511 ops/sec ±0.47% (94 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 713,879 ops/sec ±3.34% (71 runs sampled)
Using ? operator to avoid rejection x 784,484 ops/sec ±2.46% (80 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,973,423 ops/sec ±0.61% (84 runs sampled)
Raw usage underscore usage x 7,446,783 ops/sec ±0.56% (94 runs sampled)
Manipulating private properties using # x 2,739,856 ops/sec ±0.92% (89 runs sampled)
Manipulating private properties using underscore(_) x 700,544,480 ops/sec ±0.10% (97 runs sampled)
Manipulating private properties using Symbol x 727,351,600 ops/sec ±1.20% (92 runs sampled)
Manipulating private properties using PrivateSymbol x 30,000,185 ops/sec ±1.04% (86 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,650 ops/sec ±1.05% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 427 ops/sec ±1.51% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,981 ops/sec ±0.45% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 718 ops/sec ±16.70% (60 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
