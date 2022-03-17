# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Thu Mar 17 2022 17:34:59 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,191,100 ops/sec ±0.59% (90 runs sampled)
Function returning explicitly undefined x 1,186,232 ops/sec ±0.54% (93 runs sampled)
Function returning implicitly undefined x 1,212,784 ops/sec ±0.39% (92 runs sampled)
Function returning string x 1,142,495 ops/sec ±0.61% (91 runs sampled)
Function returning integer x 1,223,765 ops/sec ±0.30% (92 runs sampled)
Function returning float x 1,200,060 ops/sec ±0.29% (91 runs sampled)
Function returning functions x 1,158,719 ops/sec ±1.11% (94 runs sampled)
Function returning arrow functions x 1,178,341 ops/sec ±0.28% (96 runs sampled)
Function returning empty object x 1,202,400 ops/sec ±0.56% (96 runs sampled)
Function returning empty array x 1,203,856 ops/sec ±0.30% (95 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 623,711 ops/sec ±2.94% (77 runs sampled)
Using ? operator to avoid rejection x 626,322 ops/sec ±3.57% (78 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,173,311 ops/sec ±0.80% (88 runs sampled)
Raw usage underscore usage x 5,873,482 ops/sec ±1.03% (90 runs sampled)
Manipulating private properties using # x 2,138,168 ops/sec ±0.65% (93 runs sampled)
Manipulating private properties using underscore(_) x 578,062,262 ops/sec ±0.79% (92 runs sampled)
Manipulating private properties using Symbol x 586,442,208 ops/sec ±0.36% (92 runs sampled)
Manipulating private properties using PrivateSymbol x 25,443,905 ops/sec ±0.90% (89 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
