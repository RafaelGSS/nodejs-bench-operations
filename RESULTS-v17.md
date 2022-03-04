# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.6.0`
* __Run:__ Fri Mar 04 2022 21:03:31 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 8,751,139 ops/sec ±1.33% (91 runs sampled)
Raw usage underscore usage x 7,381,468 ops/sec ±0.24% (94 runs sampled)
Manipulating private properties using # x 2,687,480 ops/sec ±0.47% (97 runs sampled)
Manipulating private properties using underscore(_) x 700,551,490 ops/sec ±0.14% (96 runs sampled)
Manipulating private properties using Symbol x 698,817,135 ops/sec ±0.10% (89 runs sampled)
Manipulating private properties using PrivateSymbol x 699,150,026 ops/sec ±0.14% (94 runs sampled)
```
