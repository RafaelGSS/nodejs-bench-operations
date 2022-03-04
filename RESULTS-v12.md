# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Fri Mar 04 2022 21:03:28 GMT+0000 (Coordinated Universal Time)

## private-property.js
```
Raw usage private field x 6,026,031 ops/sec ±0.92% (87 runs sampled)
Raw usage underscore usage x 5,229,183 ops/sec ±1.21% (86 runs sampled)
Manipulating private properties using # x 1,871,145 ops/sec ±0.87% (89 runs sampled)
Manipulating private properties using underscore(_) x 579,256,207 ops/sec ±0.89% (87 runs sampled)
Manipulating private properties using Symbol x 577,185,323 ops/sec ±1.09% (89 runs sampled)
Manipulating private properties using PrivateSymbol x 576,585,860 ops/sec ±1.20% (89 runs sampled)
```
