# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Fri Mar 04 2022 21:03:27 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 8,935,269 ops/sec ±0.22% (97 runs sampled)
Raw usage underscore usage x 7,233,816 ops/sec ±0.34% (97 runs sampled)
Manipulating private properties using # x 2,680,605 ops/sec ±0.33% (94 runs sampled)
Manipulating private properties using underscore(_) x 701,427,230 ops/sec ±0.12% (96 runs sampled)
Manipulating private properties using Symbol x 699,236,880 ops/sec ±0.10% (92 runs sampled)
Manipulating private properties using PrivateSymbol x 698,732,183 ops/sec ±0.19% (99 runs sampled)
```
