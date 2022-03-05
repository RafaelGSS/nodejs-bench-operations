# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Sat Mar 05 2022 00:21:31 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 6,534,479 ops/sec ±1.63% (84 runs sampled)
Raw usage underscore usage x 5,462,212 ops/sec ±1.33% (83 runs sampled)
Manipulating private properties using # x 2,112,013 ops/sec ±1.42% (85 runs sampled)
Manipulating private properties using underscore(_) x 611,081,429 ops/sec ±1.45% (85 runs sampled)
Manipulating private properties using Symbol x 615,576,967 ops/sec ±1.09% (86 runs sampled)
Manipulating private properties using PrivateSymbol x 27,442,220 ops/sec ±1.41% (87 runs sampled)
```
