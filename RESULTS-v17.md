# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.7.1`
* __Run:__ Thu Mar 17 2022 17:25:23 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,230,333 ops/sec ±0.63% (97 runs sampled)
Function returning explicitly undefined x 1,222,065 ops/sec ±0.57% (98 runs sampled)
Function returning implicitly undefined x 1,250,568 ops/sec ±0.61% (95 runs sampled)
Function returning string x 1,233,087 ops/sec ±0.60% (93 runs sampled)
Function returning integer x 1,254,233 ops/sec ±0.50% (93 runs sampled)
Function returning float x 1,195,419 ops/sec ±0.51% (97 runs sampled)
Function returning functions x 1,208,727 ops/sec ±0.63% (95 runs sampled)
Function returning arrow functions x 1,189,038 ops/sec ±0.42% (98 runs sampled)
Function returning empty object x 1,117,741 ops/sec ±0.34% (93 runs sampled)
Function returning empty array x 1,236,029 ops/sec ±0.54% (97 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 766,820 ops/sec ±2.57% (80 runs sampled)
Using ? operator to avoid rejection x 829,231 ops/sec ±1.84% (86 runs sampled)
```
## private-property.js
```
Raw usage private field x 9,226,614 ops/sec ±0.34% (94 runs sampled)
Raw usage underscore usage x 7,675,487 ops/sec ±0.18% (96 runs sampled)
Manipulating private properties using # x 2,773,922 ops/sec ±0.31% (93 runs sampled)
Manipulating private properties using underscore(_) x 590,536,005 ops/sec ±0.06% (100 runs sampled)
Manipulating private properties using Symbol x 589,574,424 ops/sec ±0.03% (96 runs sampled)
Manipulating private properties using PrivateSymbol x 35,272,532 ops/sec ±0.83% (96 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,855 ops/sec ±0.83% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 374 ops/sec ±0.30% (91 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 3,100 ops/sec ±0.30% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 968 ops/sec ±34.51% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
