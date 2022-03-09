# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Wed Mar 09 2022 14:10:53 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,174,258 ops/sec ±0.65% (88 runs sampled)
Function returning explicitly undefined x 1,148,066 ops/sec ±0.63% (94 runs sampled)
Function returning implicitly undefined x 1,197,908 ops/sec ±0.53% (93 runs sampled)
Function returning string x 1,159,258 ops/sec ±0.52% (93 runs sampled)
Function returning integer x 1,156,835 ops/sec ±0.43% (92 runs sampled)
Function returning float x 1,146,661 ops/sec ±0.44% (92 runs sampled)
Function returning functions x 1,068,654 ops/sec ±0.61% (92 runs sampled)
Function returning arrow functions x 1,079,990 ops/sec ±0.36% (92 runs sampled)
Function returning empty object x 1,121,952 ops/sec ±0.22% (95 runs sampled)
Function returning empty array x 1,123,058 ops/sec ±0.47% (94 runs sampled)
```
## private-property.js
```
Raw usage private field x 6,842,575 ops/sec ±0.49% (91 runs sampled)
Raw usage underscore usage x 6,034,496 ops/sec ±0.39% (93 runs sampled)
Manipulating private properties using # x 2,053,768 ops/sec ±0.63% (93 runs sampled)
Manipulating private properties using underscore(_) x 584,041,938 ops/sec ±0.33% (92 runs sampled)
Manipulating private properties using Symbol x 590,298,141 ops/sec ±0.40% (91 runs sampled)
Manipulating private properties using PrivateSymbol x 21,692,043 ops/sec ±0.37% (93 runs sampled)
```
