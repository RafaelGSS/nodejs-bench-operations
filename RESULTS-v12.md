# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Thu Mar 17 2022 17:25:18 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,552,104 ops/sec ±1.33% (90 runs sampled)
Function returning explicitly undefined x 1,582,347 ops/sec ±0.53% (93 runs sampled)
Function returning implicitly undefined x 1,610,612 ops/sec ±0.28% (94 runs sampled)
Function returning string x 1,612,636 ops/sec ±0.33% (97 runs sampled)
Function returning integer x 1,449,404 ops/sec ±0.46% (89 runs sampled)
Function returning float x 1,589,945 ops/sec ±1.10% (93 runs sampled)
Function returning functions x 1,572,368 ops/sec ±0.40% (94 runs sampled)
Function returning arrow functions x 1,585,949 ops/sec ±0.21% (97 runs sampled)
Function returning empty object x 1,609,357 ops/sec ±0.41% (95 runs sampled)
Function returning empty array x 1,594,102 ops/sec ±0.19% (93 runs sampled)
```
## possible-undefined-function.js
```
```
## private-property.js
```
Raw usage private field x 9,445,131 ops/sec ±0.19% (96 runs sampled)
Raw usage underscore usage x 8,196,737 ops/sec ±0.17% (96 runs sampled)
Manipulating private properties using # x 2,852,616 ops/sec ±0.24% (96 runs sampled)
Manipulating private properties using underscore(_) x 34,001,884 ops/sec ±187.69% (69 runs sampled)
Manipulating private properties using Symbol x 798,932,939 ops/sec ±0.11% (97 runs sampled)
Manipulating private properties using PrivateSymbol x 29,570,433 ops/sec ±0.16% (95 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
