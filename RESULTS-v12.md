# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Thu Mar 17 2022 20:38:29 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 883,702 ops/sec ±2.09% (92 runs sampled)
Function returning explicitly undefined x 886,526 ops/sec ±0.55% (90 runs sampled)
Function returning implicitly undefined x 903,789 ops/sec ±0.81% (91 runs sampled)
Function returning string x 901,565 ops/sec ±0.59% (89 runs sampled)
Function returning integer x 916,288 ops/sec ±0.88% (93 runs sampled)
Function returning float x 898,301 ops/sec ±0.89% (91 runs sampled)
Function returning functions x 904,777 ops/sec ±0.59% (91 runs sampled)
Function returning arrow functions x 896,737 ops/sec ±0.47% (92 runs sampled)
Function returning empty object x 894,682 ops/sec ±0.75% (91 runs sampled)
Function returning empty array x 894,048 ops/sec ±0.61% (93 runs sampled)
```
## possible-undefined-function.js
```
```
## private-property.js
```
Raw usage private field x 7,380,157 ops/sec ±0.64% (87 runs sampled)
Raw usage underscore usage x 6,299,953 ops/sec ±0.55% (94 runs sampled)
Manipulating private properties using # x 2,272,156 ops/sec ±0.46% (87 runs sampled)
Manipulating private properties using underscore(_) x 973,107,334 ops/sec ±0.40% (92 runs sampled)
Manipulating private properties using Symbol x 933,944,345 ops/sec ±7.02% (88 runs sampled)
Manipulating private properties using PrivateSymbol x 21,455,993 ops/sec ±0.51% (94 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
