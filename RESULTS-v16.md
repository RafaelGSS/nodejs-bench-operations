# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Wed Mar 09 2022 14:10:54 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,018,210 ops/sec ±0.75% (91 runs sampled)
Function returning explicitly undefined x 990,774 ops/sec ±1.05% (88 runs sampled)
Function returning implicitly undefined x 1,022,503 ops/sec ±0.93% (89 runs sampled)
Function returning string x 996,442 ops/sec ±0.95% (90 runs sampled)
Function returning integer x 996,916 ops/sec ±1.00% (90 runs sampled)
Function returning float x 977,446 ops/sec ±1.24% (90 runs sampled)
Function returning functions x 944,028 ops/sec ±1.16% (86 runs sampled)
Function returning arrow functions x 961,109 ops/sec ±1.17% (88 runs sampled)
Function returning empty object x 1,004,080 ops/sec ±1.09% (87 runs sampled)
Function returning empty array x 1,011,636 ops/sec ±1.11% (89 runs sampled)
```
## private-property.js
```
Raw usage private field x 6,519,366 ops/sec ±0.87% (89 runs sampled)
Raw usage underscore usage x 5,194,597 ops/sec ±1.35% (90 runs sampled)
Manipulating private properties using # x 1,978,790 ops/sec ±0.84% (88 runs sampled)
Manipulating private properties using underscore(_) x 600,898,396 ops/sec ±0.94% (86 runs sampled)
Manipulating private properties using Symbol x 587,518,567 ops/sec ±1.24% (89 runs sampled)
Manipulating private properties using PrivateSymbol x 23,458,288 ops/sec ±3.06% (85 runs sampled)
```
