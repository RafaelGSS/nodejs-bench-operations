# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Thu Mar 17 2022 17:25:26 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,159,589 ops/sec ±0.59% (93 runs sampled)
Function returning explicitly undefined x 1,094,044 ops/sec ±1.48% (92 runs sampled)
Function returning implicitly undefined x 1,162,671 ops/sec ±1.57% (94 runs sampled)
Function returning string x 1,124,982 ops/sec ±0.60% (94 runs sampled)
Function returning integer x 1,162,029 ops/sec ±0.17% (93 runs sampled)
Function returning float x 1,158,321 ops/sec ±0.20% (91 runs sampled)
Function returning functions x 1,128,536 ops/sec ±0.80% (94 runs sampled)
Function returning arrow functions x 1,152,435 ops/sec ±0.12% (95 runs sampled)
Function returning empty object x 1,151,609 ops/sec ±0.29% (93 runs sampled)
Function returning empty array x 1,083,060 ops/sec ±1.34% (92 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 593,338 ops/sec ±3.30% (74 runs sampled)
Using ? operator to avoid rejection x 633,504 ops/sec ±3.39% (78 runs sampled)
```
## private-property.js
```
Raw usage private field x 6,680,482 ops/sec ±1.28% (92 runs sampled)
Raw usage underscore usage x 5,708,836 ops/sec ±0.84% (92 runs sampled)
Manipulating private properties using # x 2,015,997 ops/sec ±1.22% (92 runs sampled)
Manipulating private properties using underscore(_) x 553,776,950 ops/sec ±0.92% (92 runs sampled)
Manipulating private properties using Symbol x 559,668,904 ops/sec ±1.14% (89 runs sampled)
Manipulating private properties using PrivateSymbol x 24,112,335 ops/sec ±1.43% (92 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
