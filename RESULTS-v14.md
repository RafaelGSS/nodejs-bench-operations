# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Fri Mar 04 2022 21:03:27 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 7,079,022 ops/sec ±1.05% (92 runs sampled)
Raw usage underscore usage x 5,766,844 ops/sec ±0.97% (96 runs sampled)
Manipulating private properties using # x 2,093,448 ops/sec ±0.25% (93 runs sampled)
Manipulating private properties using underscore(_) x 579,973,599 ops/sec ±0.14% (95 runs sampled)
Manipulating private properties using Symbol x 577,958,445 ops/sec ±0.10% (94 runs sampled)
Manipulating private properties using PrivateSymbol x 578,010,202 ops/sec ±0.10% (94 runs sampled)
```
