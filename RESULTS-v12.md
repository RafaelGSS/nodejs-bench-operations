# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Wed Mar 09 2022 16:13:05 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,111,424 ops/sec ±1.19% (88 runs sampled)
Function returning explicitly undefined x 1,091,435 ops/sec ±1.49% (87 runs sampled)
Function returning implicitly undefined x 1,118,776 ops/sec ±1.44% (90 runs sampled)
Function returning string x 1,098,969 ops/sec ±1.54% (89 runs sampled)
Function returning integer x 1,139,506 ops/sec ±1.00% (91 runs sampled)
Function returning float x 1,046,439 ops/sec ±1.18% (90 runs sampled)
Function returning functions x 1,084,782 ops/sec ±0.89% (91 runs sampled)
Function returning arrow functions x 1,093,718 ops/sec ±1.38% (90 runs sampled)
Function returning empty object x 1,073,465 ops/sec ±1.50% (88 runs sampled)
Function returning empty array x 1,101,277 ops/sec ±1.52% (88 runs sampled)
```
## private-property.js
```
Raw usage private field x 6,222,120 ops/sec ±1.06% (89 runs sampled)
Raw usage underscore usage x 5,222,703 ops/sec ±1.24% (89 runs sampled)
Manipulating private properties using # x 1,831,173 ops/sec ±1.24% (84 runs sampled)
Manipulating private properties using underscore(_) x 29,719,417 ops/sec ±186.17% (84 runs sampled)
Manipulating private properties using Symbol x 580,362,240 ops/sec ±1.83% (86 runs sampled)
Manipulating private properties using PrivateSymbol x 18,955,713 ops/sec ±3.83% (81 runs sampled)
```
