# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Fri Mar 04 2022 16:33:52 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 8,987,324 ops/sec ±1.75% (88 runs sampled)
Raw usage underscore usage x 7,477,370 ops/sec ±1.25% (91 runs sampled)
Manipulating private properties using # x 2,801,863 ops/sec ±1.36% (93 runs sampled)
Manipulating private properties using underscore(_) x 780,728,028 ops/sec ±1.02% (95 runs sampled)
Manipulating private properties using Symbol x 779,992,286 ops/sec ±1.10% (96 runs sampled)
```
