# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Wed Mar 09 2022 16:13:01 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,404,694 ops/sec ±0.30% (98 runs sampled)
Function returning explicitly undefined x 1,379,466 ops/sec ±0.13% (93 runs sampled)
Function returning implicitly undefined x 1,405,734 ops/sec ±0.34% (93 runs sampled)
Function returning string x 1,405,693 ops/sec ±0.35% (96 runs sampled)
Function returning integer x 1,425,404 ops/sec ±0.14% (97 runs sampled)
Function returning float x 1,418,936 ops/sec ±0.13% (96 runs sampled)
Function returning functions x 1,384,603 ops/sec ±0.35% (95 runs sampled)
Function returning arrow functions x 1,399,316 ops/sec ±0.16% (98 runs sampled)
Function returning empty object x 1,425,195 ops/sec ±0.24% (96 runs sampled)
Function returning empty array x 1,388,572 ops/sec ±0.20% (94 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,696,967 ops/sec ±0.30% (94 runs sampled)
Raw usage underscore usage x 7,136,023 ops/sec ±0.56% (93 runs sampled)
Manipulating private properties using # x 2,543,030 ops/sec ±0.24% (94 runs sampled)
Manipulating private properties using underscore(_) x 702,126,655 ops/sec ±0.10% (95 runs sampled)
Manipulating private properties using Symbol x 700,929,682 ops/sec ±0.10% (98 runs sampled)
Manipulating private properties using PrivateSymbol x 29,829,639 ops/sec ±0.69% (97 runs sampled)
```
