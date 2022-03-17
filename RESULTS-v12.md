# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Thu Mar 17 2022 19:27:31 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,418,683 ops/sec ±1.77% (94 runs sampled)
Function returning explicitly undefined x 1,411,675 ops/sec ±0.09% (96 runs sampled)
Function returning implicitly undefined x 1,418,426 ops/sec ±0.39% (93 runs sampled)
Function returning string x 1,432,953 ops/sec ±0.24% (97 runs sampled)
Function returning integer x 1,409,542 ops/sec ±0.21% (96 runs sampled)
Function returning float x 1,402,552 ops/sec ±0.33% (95 runs sampled)
Function returning functions x 1,366,653 ops/sec ±0.12% (94 runs sampled)
Function returning arrow functions x 1,404,480 ops/sec ±0.09% (95 runs sampled)
Function returning empty object x 1,415,194 ops/sec ±0.45% (97 runs sampled)
Function returning empty array x 1,419,728 ops/sec ±0.14% (95 runs sampled)
```
## possible-undefined-function.js
```
```
## private-property.js
```
Raw usage private field x 8,274,235 ops/sec ±0.21% (94 runs sampled)
Raw usage underscore usage x 7,208,179 ops/sec ±0.12% (96 runs sampled)
Manipulating private properties using # x 2,497,415 ops/sec ±0.26% (94 runs sampled)
Manipulating private properties using underscore(_) x 701,949,874 ops/sec ±0.15% (92 runs sampled)
Manipulating private properties using Symbol x 700,584,353 ops/sec ±0.15% (92 runs sampled)
Manipulating private properties using PrivateSymbol x 25,892,325 ops/sec ±0.15% (96 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
