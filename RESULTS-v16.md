# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Wed Mar 09 2022 16:13:01 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,524,295 ops/sec ±1.18% (91 runs sampled)
Function returning explicitly undefined x 1,496,379 ops/sec ±1.49% (91 runs sampled)
Function returning implicitly undefined x 1,436,955 ops/sec ±1.30% (91 runs sampled)
Function returning string x 1,342,033 ops/sec ±0.12% (97 runs sampled)
Function returning integer x 1,296,747 ops/sec ±0.36% (93 runs sampled)
Function returning float x 1,355,364 ops/sec ±0.20% (95 runs sampled)
Function returning functions x 1,323,914 ops/sec ±0.56% (98 runs sampled)
Function returning arrow functions x 1,327,090 ops/sec ±0.12% (97 runs sampled)
Function returning empty object x 1,372,828 ops/sec ±0.11% (96 runs sampled)
Function returning empty array x 1,363,606 ops/sec ±0.39% (98 runs sampled)
```
## private-property.js
```
Raw usage private field x 9,147,422 ops/sec ±1.94% (88 runs sampled)
Raw usage underscore usage x 7,719,228 ops/sec ±1.84% (90 runs sampled)
Manipulating private properties using # x 3,060,468 ops/sec ±0.47% (95 runs sampled)
Manipulating private properties using underscore(_) x 745,995,570 ops/sec ±1.54% (92 runs sampled)
Manipulating private properties using Symbol x 743,433,350 ops/sec ±1.85% (89 runs sampled)
Manipulating private properties using PrivateSymbol x 26,893,718 ops/sec ±2.08% (86 runs sampled)
```
