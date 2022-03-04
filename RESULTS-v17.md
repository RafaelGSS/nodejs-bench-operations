# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.6.0`
* __Run:__ Fri Mar 04 2022 16:33:57 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 7,084,591 ops/sec ±0.79% (89 runs sampled)
Raw usage underscore usage x 5,955,993 ops/sec ±1.06% (88 runs sampled)
Manipulating private properties using # x 2,121,767 ops/sec ±0.82% (90 runs sampled)
Manipulating private properties using underscore(_) x 567,016,249 ops/sec ±0.39% (95 runs sampled)
Manipulating private properties using Symbol x 557,787,596 ops/sec ±1.00% (91 runs sampled)
```
