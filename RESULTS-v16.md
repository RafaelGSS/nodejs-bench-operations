# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Thu Mar 17 2022 17:25:30 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,018,911 ops/sec ±0.51% (89 runs sampled)
Function returning explicitly undefined x 991,581 ops/sec ±0.96% (86 runs sampled)
Function returning implicitly undefined x 1,021,959 ops/sec ±0.74% (89 runs sampled)
Function returning string x 1,011,561 ops/sec ±0.76% (92 runs sampled)
Function returning integer x 1,009,286 ops/sec ±0.89% (92 runs sampled)
Function returning float x 1,018,406 ops/sec ±0.58% (90 runs sampled)
Function returning functions x 982,428 ops/sec ±0.66% (91 runs sampled)
Function returning arrow functions x 989,254 ops/sec ±0.80% (90 runs sampled)
Function returning empty object x 1,017,799 ops/sec ±0.67% (90 runs sampled)
Function returning empty array x 1,022,181 ops/sec ±0.63% (88 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 613,364 ops/sec ±3.04% (73 runs sampled)
Using ? operator to avoid rejection x 674,230 ops/sec ±2.54% (80 runs sampled)
```
## private-property.js
```
Raw usage private field x 6,638,339 ops/sec ±0.52% (88 runs sampled)
Raw usage underscore usage x 5,408,653 ops/sec ±0.74% (92 runs sampled)
Manipulating private properties using # x 2,007,004 ops/sec ±0.60% (91 runs sampled)
Manipulating private properties using underscore(_) x 607,867,034 ops/sec ±0.55% (93 runs sampled)
Manipulating private properties using Symbol x 607,068,243 ops/sec ±0.26% (93 runs sampled)
Manipulating private properties using PrivateSymbol x 24,419,080 ops/sec ±2.53% (85 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,242 ops/sec ±16.17% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 275 ops/sec ±31.70% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,201 ops/sec ±0.84% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 695 ops/sec ±16.44% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
