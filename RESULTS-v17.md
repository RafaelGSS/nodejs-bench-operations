# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.6.0`
* __Run:__ Sat Mar 05 2022 00:21:29 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 6,842,503 ops/sec ±0.47% (91 runs sampled)
Raw usage underscore usage x 5,552,066 ops/sec ±0.57% (91 runs sampled)
Manipulating private properties using # x 2,065,956 ops/sec ±0.54% (91 runs sampled)
Manipulating private properties using underscore(_) x 600,576,387 ops/sec ±0.48% (93 runs sampled)
Manipulating private properties using Symbol x 596,828,117 ops/sec ±0.53% (92 runs sampled)
Manipulating private properties using PrivateSymbol x 24,669,339 ops/sec ±2.01% (91 runs sampled)
```
