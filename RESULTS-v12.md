# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Wed Mar 23 2022 13:53:45 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
```
## function-return.js
```
Function returning null x 897,105 ops/sec ±0.72% (90 runs sampled)
Function returning explicitly undefined x 903,479 ops/sec ±0.53% (89 runs sampled)
Function returning implicitly undefined x 922,766 ops/sec ±0.62% (91 runs sampled)
Function returning string x 933,806 ops/sec ±0.38% (94 runs sampled)
Function returning integer x 940,206 ops/sec ±0.33% (93 runs sampled)
Function returning float x 945,096 ops/sec ±0.65% (95 runs sampled)
Function returning functions x 926,863 ops/sec ±0.36% (95 runs sampled)
Function returning arrow functions x 930,520 ops/sec ±0.39% (95 runs sampled)
Function returning empty object x 930,152 ops/sec ±0.61% (94 runs sampled)
Function returning empty array x 933,449 ops/sec ±0.31% (94 runs sampled)
```
## possible-undefined-function.js
```
```
## private-property.js
```
Raw usage private field x 7,690,540 ops/sec ±0.41% (92 runs sampled)
Raw usage underscore usage x 6,495,114 ops/sec ±0.68% (93 runs sampled)
Manipulating private properties using # x 2,318,141 ops/sec ±0.49% (90 runs sampled)
Manipulating private properties using underscore(_) x 18,093,129 ops/sec ±192.43% (57 runs sampled)
Manipulating private properties using Symbol x 994,728,125 ops/sec ±0.30% (97 runs sampled)
Manipulating private properties using PrivateSymbol x 22,014,270 ops/sec ±0.38% (95 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
