# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Thu Mar 17 2022 17:42:23 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,410,378 ops/sec ±0.40% (97 runs sampled)
Function returning explicitly undefined x 1,395,941 ops/sec ±0.21% (94 runs sampled)
Function returning implicitly undefined x 1,432,033 ops/sec ±0.37% (88 runs sampled)
Function returning string x 1,396,380 ops/sec ±0.34% (95 runs sampled)
Function returning integer x 1,433,584 ops/sec ±0.13% (98 runs sampled)
Function returning float x 1,434,631 ops/sec ±0.21% (98 runs sampled)
Function returning functions x 1,322,089 ops/sec ±0.35% (97 runs sampled)
Function returning arrow functions x 1,366,580 ops/sec ±0.25% (97 runs sampled)
Function returning empty object x 1,406,033 ops/sec ±0.49% (99 runs sampled)
Function returning empty array x 1,413,602 ops/sec ±0.23% (99 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 707,210 ops/sec ±2.97% (74 runs sampled)
Using ? operator to avoid rejection x 749,537 ops/sec ±3.26% (81 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,612,929 ops/sec ±0.23% (94 runs sampled)
Raw usage underscore usage x 7,125,915 ops/sec ±0.11% (94 runs sampled)
Manipulating private properties using # x 2,534,751 ops/sec ±0.29% (96 runs sampled)
Manipulating private properties using underscore(_) x 702,614,871 ops/sec ±0.14% (89 runs sampled)
Manipulating private properties using Symbol x 702,608,628 ops/sec ±0.09% (97 runs sampled)
Manipulating private properties using PrivateSymbol x 29,824,098 ops/sec ±0.84% (92 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
