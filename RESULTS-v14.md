# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Fri Mar 04 2022 12:18:04 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 8,559,590 ops/sec ±1.95% (91 runs sampled)
Raw usage underscore usage x 7,165,118 ops/sec ±0.19% (96 runs sampled)
Manipulating private properties x 2,548,184 ops/sec ±0.20% (93 runs sampled)
Manipulating underscore properties x 700,965,674 ops/sec ±0.11% (94 runs sampled)
```