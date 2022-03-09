# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Wed Mar 09 2022 16:21:45 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,120,671 ops/sec ±0.90% (92 runs sampled)
Function returning explicitly undefined x 1,104,621 ops/sec ±0.44% (90 runs sampled)
Function returning implicitly undefined x 1,086,659 ops/sec ±0.44% (93 runs sampled)
Function returning string x 1,138,914 ops/sec ±0.38% (90 runs sampled)
Function returning integer x 1,155,533 ops/sec ±0.12% (94 runs sampled)
Function returning float x 1,124,462 ops/sec ±0.52% (97 runs sampled)
Function returning functions x 1,073,993 ops/sec ±0.47% (93 runs sampled)
Function returning arrow functions x 1,074,007 ops/sec ±0.28% (92 runs sampled)
Function returning empty object x 1,133,615 ops/sec ±0.41% (95 runs sampled)
Function returning empty array x 1,115,834 ops/sec ±0.84% (90 runs sampled)
```
## private-property.js
```
Raw usage private field x 6,440,660 ops/sec ±0.85% (90 runs sampled)
Raw usage underscore usage x 5,690,546 ops/sec ±0.73% (93 runs sampled)
Manipulating private properties using # x 1,943,788 ops/sec ±0.67% (91 runs sampled)
Manipulating private properties using underscore(_) x 554,481,051 ops/sec ±0.22% (93 runs sampled)
Manipulating private properties using Symbol x 540,536,222 ops/sec ±0.92% (95 runs sampled)
Manipulating private properties using PrivateSymbol x 20,361,241 ops/sec ±0.63% (92 runs sampled)
```
