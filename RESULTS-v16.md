# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Sat Mar 05 2022 00:21:24 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 6,524,063 ops/sec ±1.12% (84 runs sampled)
Raw usage underscore usage x 5,419,347 ops/sec ±1.17% (89 runs sampled)
Manipulating private properties using # x 2,005,682 ops/sec ±0.59% (92 runs sampled)
Manipulating private properties using underscore(_) x 607,034,960 ops/sec ±0.77% (91 runs sampled)
Manipulating private properties using Symbol x 603,403,449 ops/sec ±0.86% (90 runs sampled)
Manipulating private properties using PrivateSymbol x 23,937,501 ops/sec ±2.93% (83 runs sampled)
```
