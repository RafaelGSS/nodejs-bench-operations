# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Mon Mar 14 2022 14:49:40 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,323,605 ops/sec ±1.18% (83 runs sampled)
Function returning explicitly undefined x 1,275,596 ops/sec ±0.69% (90 runs sampled)
Function returning implicitly undefined x 1,328,910 ops/sec ±1.54% (91 runs sampled)
Function returning string x 1,244,017 ops/sec ±1.04% (86 runs sampled)
Function returning integer x 1,340,061 ops/sec ±1.08% (82 runs sampled)
Function returning float x 1,220,945 ops/sec ±1.04% (80 runs sampled)
Function returning functions x 1,171,784 ops/sec ±0.79% (87 runs sampled)
Function returning arrow functions x 1,298,875 ops/sec ±0.71% (92 runs sampled)
Function returning empty object x 1,223,704 ops/sec ±0.46% (94 runs sampled)
Function returning empty array x 1,183,511 ops/sec ±0.51% (88 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,533,255 ops/sec ±0.43% (90 runs sampled)
Raw usage underscore usage x 6,141,828 ops/sec ±0.47% (89 runs sampled)
Manipulating private properties using # x 2,179,482 ops/sec ±0.50% (92 runs sampled)
Manipulating private properties using underscore(_) x 597,001,285 ops/sec ±0.41% (90 runs sampled)
Manipulating private properties using Symbol x 586,444,233 ops/sec ±0.23% (93 runs sampled)
Manipulating private properties using PrivateSymbol x 25,796,158 ops/sec ±0.95% (90 runs sampled)
```
## stream-readable.js
```
```
