# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Fri Mar 04 2022 16:33:51 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 8,845,353 ops/sec ±0.54% (94 runs sampled)
Raw usage underscore usage x 7,342,102 ops/sec ±0.38% (94 runs sampled)
Manipulating private properties using # x 2,698,709 ops/sec ±0.34% (96 runs sampled)
Manipulating private properties using underscore(_) x 703,341,265 ops/sec ±0.12% (95 runs sampled)
Manipulating private properties using Symbol x 701,951,369 ops/sec ±0.21% (94 runs sampled)
```
