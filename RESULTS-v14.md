# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Thu Mar 17 2022 19:27:37 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,125,308 ops/sec ±0.96% (87 runs sampled)
Function returning explicitly undefined x 1,115,609 ops/sec ±0.95% (86 runs sampled)
Function returning implicitly undefined x 1,157,151 ops/sec ±0.58% (87 runs sampled)
Function returning string x 1,115,779 ops/sec ±0.85% (91 runs sampled)
Function returning integer x 1,150,980 ops/sec ±0.81% (93 runs sampled)
Function returning float x 1,137,998 ops/sec ±0.86% (90 runs sampled)
Function returning functions x 1,094,409 ops/sec ±0.90% (88 runs sampled)
Function returning arrow functions x 1,102,777 ops/sec ±0.99% (89 runs sampled)
Function returning empty object x 1,086,413 ops/sec ±1.33% (90 runs sampled)
Function returning empty array x 1,053,483 ops/sec ±1.99% (88 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 577,209 ops/sec ±3.58% (73 runs sampled)
Using ? operator to avoid rejection x 623,574 ops/sec ±3.47% (77 runs sampled)
```
## private-property.js
```
Raw usage private field x 6,419,673 ops/sec ±1.11% (89 runs sampled)
Raw usage underscore usage x 5,231,099 ops/sec ±0.83% (88 runs sampled)
Manipulating private properties using # x 1,965,920 ops/sec ±0.82% (87 runs sampled)
Manipulating private properties using underscore(_) x 608,945,039 ops/sec ±0.52% (91 runs sampled)
Manipulating private properties using Symbol x 612,100,083 ops/sec ±0.54% (95 runs sampled)
Manipulating private properties using PrivateSymbol x 26,059,004 ops/sec ±1.03% (91 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
