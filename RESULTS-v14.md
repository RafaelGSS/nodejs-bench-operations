# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Wed Mar 09 2022 16:21:42 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,423,223 ops/sec ±0.40% (95 runs sampled)
Function returning explicitly undefined x 1,398,107 ops/sec ±0.18% (92 runs sampled)
Function returning implicitly undefined x 1,426,094 ops/sec ±0.39% (97 runs sampled)
Function returning string x 1,416,206 ops/sec ±0.30% (97 runs sampled)
Function returning integer x 1,439,898 ops/sec ±0.14% (98 runs sampled)
Function returning float x 1,423,213 ops/sec ±0.11% (98 runs sampled)
Function returning functions x 1,379,150 ops/sec ±0.38% (99 runs sampled)
Function returning arrow functions x 1,392,618 ops/sec ±0.14% (97 runs sampled)
Function returning empty object x 1,425,125 ops/sec ±0.45% (93 runs sampled)
Function returning empty array x 1,417,907 ops/sec ±0.15% (96 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,759,102 ops/sec ±0.27% (96 runs sampled)
Raw usage underscore usage x 7,178,754 ops/sec ±0.18% (96 runs sampled)
Manipulating private properties using # x 2,558,648 ops/sec ±0.21% (94 runs sampled)
Manipulating private properties using underscore(_) x 702,574,463 ops/sec ±0.11% (96 runs sampled)
Manipulating private properties using Symbol x 701,093,687 ops/sec ±0.10% (96 runs sampled)
Manipulating private properties using PrivateSymbol x 30,154,590 ops/sec ±0.73% (93 runs sampled)
```
