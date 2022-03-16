# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Wed Mar 16 2022 18:52:11 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,224,260 ops/sec ±0.46% (91 runs sampled)
Function returning explicitly undefined x 1,192,228 ops/sec ±0.30% (91 runs sampled)
Function returning implicitly undefined x 1,214,125 ops/sec ±0.45% (94 runs sampled)
Function returning string x 1,194,956 ops/sec ±0.58% (89 runs sampled)
Function returning integer x 1,203,428 ops/sec ±0.44% (93 runs sampled)
Function returning float x 1,250,276 ops/sec ±0.42% (89 runs sampled)
Function returning functions x 1,197,998 ops/sec ±0.56% (91 runs sampled)
Function returning arrow functions x 1,201,729 ops/sec ±0.37% (91 runs sampled)
Function returning empty object x 1,216,472 ops/sec ±0.55% (89 runs sampled)
Function returning empty array x 1,230,999 ops/sec ±0.63% (92 runs sampled)
```
## possible-undefined-function.js
```
```
## private-property.js
```
Raw usage private field x 7,063,843 ops/sec ±0.51% (90 runs sampled)
Raw usage underscore usage x 6,158,831 ops/sec ±0.35% (90 runs sampled)
Manipulating private properties using # x 2,153,153 ops/sec ±0.56% (93 runs sampled)
Manipulating private properties using underscore(_) x 32,260,254 ops/sec ±185.59% (81 runs sampled)
Manipulating private properties using Symbol x 589,046,038 ops/sec ±0.49% (88 runs sampled)
Manipulating private properties using PrivateSymbol x 22,356,700 ops/sec ±0.44% (93 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
