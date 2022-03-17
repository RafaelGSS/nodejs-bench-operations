# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.7.1`
* __Run:__ Thu Mar 17 2022 17:35:01 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,305,412 ops/sec ±1.42% (85 runs sampled)
Function returning explicitly undefined x 1,293,497 ops/sec ±1.46% (84 runs sampled)
Function returning implicitly undefined x 1,412,597 ops/sec ±0.99% (93 runs sampled)
Function returning string x 1,424,550 ops/sec ±0.81% (91 runs sampled)
Function returning integer x 1,455,459 ops/sec ±1.12% (91 runs sampled)
Function returning float x 1,462,533 ops/sec ±0.99% (93 runs sampled)
Function returning functions x 1,415,471 ops/sec ±0.83% (93 runs sampled)
Function returning arrow functions x 1,450,821 ops/sec ±1.18% (87 runs sampled)
Function returning empty object x 1,502,221 ops/sec ±1.06% (93 runs sampled)
Function returning empty array x 1,467,826 ops/sec ±1.54% (92 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 773,404 ops/sec ±2.73% (71 runs sampled)
Using ? operator to avoid rejection x 812,521 ops/sec ±2.92% (75 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,484,727 ops/sec ±0.78% (90 runs sampled)
Raw usage underscore usage x 6,975,359 ops/sec ±0.80% (92 runs sampled)
Manipulating private properties using # x 2,592,568 ops/sec ±0.74% (93 runs sampled)
Manipulating private properties using underscore(_) x 671,381,043 ops/sec ±0.86% (94 runs sampled)
Manipulating private properties using Symbol x 655,452,852 ops/sec ±0.82% (91 runs sampled)
Manipulating private properties using PrivateSymbol x 26,852,545 ops/sec ±1.89% (87 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,917 ops/sec ±1.35% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 439 ops/sec ±1.97% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,969 ops/sec ±1.58% (86 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 744 ops/sec ±16.79% (63 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
