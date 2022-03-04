# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Fri Mar 04 2022 16:33:52 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 8,307,935 ops/sec ±0.21% (93 runs sampled)
Raw usage underscore usage x 7,231,591 ops/sec ±0.16% (93 runs sampled)
Manipulating private properties using # x 2,497,665 ops/sec ±0.29% (91 runs sampled)
Manipulating private properties using underscore(_) x 32,158,638 ops/sec ±187.00% (69 runs sampled)
Manipulating private properties using Symbol x 701,155,402 ops/sec ±0.15% (96 runs sampled)
```
