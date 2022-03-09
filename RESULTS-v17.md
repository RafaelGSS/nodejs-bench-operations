# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.6.0`
* __Run:__ Wed Mar 09 2022 16:13:05 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,369,730 ops/sec ±0.36% (95 runs sampled)
Function returning explicitly undefined x 1,364,919 ops/sec ±0.49% (95 runs sampled)
Function returning implicitly undefined x 1,394,467 ops/sec ±0.36% (95 runs sampled)
Function returning string x 1,367,153 ops/sec ±0.25% (96 runs sampled)
Function returning integer x 1,361,148 ops/sec ±0.42% (93 runs sampled)
Function returning float x 1,375,904 ops/sec ±0.24% (97 runs sampled)
Function returning functions x 1,345,142 ops/sec ±0.22% (96 runs sampled)
Function returning arrow functions x 1,365,693 ops/sec ±0.43% (94 runs sampled)
Function returning empty object x 1,388,331 ops/sec ±0.16% (96 runs sampled)
Function returning empty array x 1,324,681 ops/sec ±0.35% (96 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,968,326 ops/sec ±0.22% (97 runs sampled)
Raw usage underscore usage x 7,441,342 ops/sec ±0.46% (97 runs sampled)
Manipulating private properties using # x 2,681,691 ops/sec ±0.61% (95 runs sampled)
Manipulating private properties using underscore(_) x 703,831,162 ops/sec ±0.12% (95 runs sampled)
Manipulating private properties using Symbol x 702,410,182 ops/sec ±0.10% (95 runs sampled)
Manipulating private properties using PrivateSymbol x 29,351,353 ops/sec ±0.72% (98 runs sampled)
```
