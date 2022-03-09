# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.6.0`
* __Run:__ Wed Mar 09 2022 16:21:45 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,016,632 ops/sec ±1.00% (92 runs sampled)
Function returning explicitly undefined x 971,793 ops/sec ±0.81% (94 runs sampled)
Function returning implicitly undefined x 1,078,211 ops/sec ±0.28% (96 runs sampled)
Function returning string x 1,061,313 ops/sec ±0.18% (95 runs sampled)
Function returning integer x 1,086,809 ops/sec ±0.48% (97 runs sampled)
Function returning float x 1,064,651 ops/sec ±0.18% (97 runs sampled)
Function returning functions x 1,035,807 ops/sec ±0.18% (96 runs sampled)
Function returning arrow functions x 1,051,418 ops/sec ±0.18% (96 runs sampled)
Function returning empty object x 1,076,161 ops/sec ±0.55% (93 runs sampled)
Function returning empty array x 1,077,164 ops/sec ±0.18% (96 runs sampled)
```
## private-property.js
```
Raw usage private field x 6,981,271 ops/sec ±0.32% (96 runs sampled)
Raw usage underscore usage x 5,721,157 ops/sec ±0.52% (95 runs sampled)
Manipulating private properties using # x 2,074,124 ops/sec ±0.67% (93 runs sampled)
Manipulating private properties using underscore(_) x 541,526,417 ops/sec ±0.45% (93 runs sampled)
Manipulating private properties using Symbol x 538,439,583 ops/sec ±0.41% (91 runs sampled)
Manipulating private properties using PrivateSymbol x 22,345,361 ops/sec ±0.49% (90 runs sampled)
```
