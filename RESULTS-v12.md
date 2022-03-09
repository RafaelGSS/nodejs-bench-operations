# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Sat Mar 05 2022 00:21:24 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 7,141,998 ops/sec ±1.28% (85 runs sampled)
Raw usage underscore usage x 6,104,601 ops/sec ±1.13% (85 runs sampled)
Manipulating private properties using # x 2,197,525 ops/sec ±1.27% (86 runs sampled)
Manipulating private properties using underscore(_) x 685,218,929 ops/sec ±0.96% (90 runs sampled)
Manipulating private properties using Symbol x 678,994,496 ops/sec ±1.14% (88 runs sampled)
Manipulating private properties using PrivateSymbol x 23,388,238 ops/sec ±1.37% (86 runs sampled)
```
