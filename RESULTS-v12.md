# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Thu Mar 17 2022 16:46:38 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,163,644 ops/sec ±0.39% (91 runs sampled)
Function returning explicitly undefined x 1,156,141 ops/sec ±0.35% (96 runs sampled)
Function returning implicitly undefined x 1,174,653 ops/sec ±0.42% (92 runs sampled)
Function returning string x 1,156,104 ops/sec ±0.40% (93 runs sampled)
Function returning integer x 1,173,626 ops/sec ±0.40% (94 runs sampled)
Function returning float x 1,174,831 ops/sec ±0.46% (92 runs sampled)
Function returning functions x 1,121,991 ops/sec ±0.56% (95 runs sampled)
Function returning arrow functions x 1,118,682 ops/sec ±0.47% (92 runs sampled)
Function returning empty object x 1,151,052 ops/sec ±0.43% (93 runs sampled)
Function returning empty array x 1,151,864 ops/sec ±0.42% (93 runs sampled)
```
## possible-undefined-function.js
```
```
## private-property.js
```
Raw usage private field x 8,675,553 ops/sec ±0.20% (96 runs sampled)
Raw usage underscore usage x 7,716,368 ops/sec ±0.26% (94 runs sampled)
Manipulating private properties using # x 2,635,085 ops/sec ±0.21% (97 runs sampled)
Manipulating private properties using underscore(_) x 31,127,567 ops/sec ±183.04% (72 runs sampled)
Manipulating private properties using Symbol x 470,052,329 ops/sec ±0.08% (97 runs sampled)
Manipulating private properties using PrivateSymbol x 31,955,834 ops/sec ±0.44% (96 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
