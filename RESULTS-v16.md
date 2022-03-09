# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Wed Mar 09 2022 16:21:37 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,373,284 ops/sec ±0.35% (94 runs sampled)
Function returning explicitly undefined x 1,345,361 ops/sec ±0.16% (91 runs sampled)
Function returning implicitly undefined x 1,384,157 ops/sec ±0.33% (90 runs sampled)
Function returning string x 1,381,429 ops/sec ±0.13% (96 runs sampled)
Function returning integer x 1,389,994 ops/sec ±0.37% (96 runs sampled)
Function returning float x 1,389,637 ops/sec ±0.18% (96 runs sampled)
Function returning functions x 1,352,571 ops/sec ±0.39% (98 runs sampled)
Function returning arrow functions x 1,374,155 ops/sec ±0.13% (94 runs sampled)
Function returning empty object x 1,391,338 ops/sec ±0.13% (95 runs sampled)
Function returning empty array x 1,390,902 ops/sec ±0.37% (95 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,991,144 ops/sec ±0.20% (91 runs sampled)
Raw usage underscore usage x 7,402,218 ops/sec ±0.18% (96 runs sampled)
Manipulating private properties using # x 2,696,398 ops/sec ±0.26% (99 runs sampled)
Manipulating private properties using underscore(_) x 702,365,619 ops/sec ±0.11% (98 runs sampled)
Manipulating private properties using Symbol x 701,387,107 ops/sec ±0.11% (99 runs sampled)
Manipulating private properties using PrivateSymbol x 26,953,534 ops/sec ±1.02% (91 runs sampled)
```
