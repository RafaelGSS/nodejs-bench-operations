# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Thu Mar 17 2022 20:40:16 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 903,727 ops/sec ±0.81% (90 runs sampled)
Function returning explicitly undefined x 921,990 ops/sec ±0.47% (91 runs sampled)
Function returning implicitly undefined x 912,599 ops/sec ±0.65% (85 runs sampled)
Function returning string x 909,085 ops/sec ±0.42% (94 runs sampled)
Function returning integer x 926,493 ops/sec ±0.90% (85 runs sampled)
Function returning float x 909,919 ops/sec ±0.77% (93 runs sampled)
Function returning functions x 907,345 ops/sec ±0.44% (94 runs sampled)
Function returning arrow functions x 909,772 ops/sec ±0.76% (90 runs sampled)
Function returning empty object x 916,803 ops/sec ±0.49% (92 runs sampled)
Function returning empty array x 910,831 ops/sec ±0.41% (93 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 577,224 ops/sec ±2.72% (74 runs sampled)
Using ? operator to avoid rejection x 606,149 ops/sec ±2.45% (81 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,617,420 ops/sec ±0.48% (93 runs sampled)
Raw usage underscore usage x 6,448,110 ops/sec ±0.41% (93 runs sampled)
Manipulating private properties using # x 2,320,784 ops/sec ±0.45% (90 runs sampled)
Manipulating private properties using underscore(_) x 973,768,581 ops/sec ±0.41% (95 runs sampled)
Manipulating private properties using Symbol x 972,801,697 ops/sec ±0.35% (88 runs sampled)
Manipulating private properties using PrivateSymbol x 22,960,649 ops/sec ±0.45% (91 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
