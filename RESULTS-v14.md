# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Wed Mar 16 2022 18:52:06 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,133,902 ops/sec ±0.61% (88 runs sampled)
Function returning explicitly undefined x 1,166,119 ops/sec ±0.21% (94 runs sampled)
Function returning implicitly undefined x 1,175,542 ops/sec ±0.45% (92 runs sampled)
Function returning string x 1,144,429 ops/sec ±0.58% (93 runs sampled)
Function returning integer x 1,176,034 ops/sec ±0.62% (94 runs sampled)
Function returning float x 1,169,413 ops/sec ±0.38% (93 runs sampled)
Function returning functions x 1,151,170 ops/sec ±0.49% (92 runs sampled)
Function returning arrow functions x 1,168,671 ops/sec ±0.17% (91 runs sampled)
Function returning empty object x 1,199,703 ops/sec ±1.00% (87 runs sampled)
Function returning empty array x 1,183,903 ops/sec ±0.48% (93 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 578,538 ops/sec ±3.92% (72 runs sampled)
Using ? operator to avoid rejection x 635,608 ops/sec ±3.35% (81 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,047,465 ops/sec ±0.64% (86 runs sampled)
Raw usage underscore usage x 5,792,296 ops/sec ±0.46% (92 runs sampled)
Manipulating private properties using # x 2,087,518 ops/sec ±1.06% (84 runs sampled)
Manipulating private properties using underscore(_) x 581,767,120 ops/sec ±0.69% (92 runs sampled)
Manipulating private properties using Symbol x 570,019,399 ops/sec ±0.33% (92 runs sampled)
Manipulating private properties using PrivateSymbol x 24,188,251 ops/sec ±1.61% (88 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
