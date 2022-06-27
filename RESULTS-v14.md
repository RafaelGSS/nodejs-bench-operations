# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Mon Jun 27 2022 00:15:02 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
[True conditional] Using instanceof only x 249,595 ops/sec ±0.67% (84 runs sampled)
[True conditional] Using constructor name x 243,623 ops/sec ±0.72% (84 runs sampled)
[True conditional] Check if property is valid then instanceof  x 246,778 ops/sec ±0.65% (85 runs sampled)
[False conditional] Using instanceof only x 614,654,807 ops/sec ±0.29% (91 runs sampled)
[False conditional] Using constructor name x 611,582,739 ops/sec ±0.40% (92 runs sampled)
[False conditional] Check if property is valid then instanceof  x 603,269,527 ops/sec ±0.51% (90 runs sampled)
```
## date-string-coersion.js
```
Using String() x 587,022 ops/sec ±0.48% (92 runs sampled)
Using brackets {} x 598,149 ops/sec ±0.47% (91 runs sampled)
Using '' +  x 586,229 ops/sec ±0.30% (93 runs sampled)
Using date.toString() x 632,120 ops/sec ±0.72% (90 runs sampled)
```
## deleting-properties.js
```
Using delete property x 2,006,773 ops/sec ±0.64% (93 runs sampled)
Using undefined assignment x 597,359,449 ops/sec ±0.20% (94 runs sampled)
```
## error.js
```
Error x 238,915 ops/sec ±0.45% (87 runs sampled)
NodeError x 238,552 ops/sec ±0.40% (88 runs sampled)
NodeError Range x 234,268 ops/sec ±0.55% (86 runs sampled)
```
## function-return.js
```
Function returning null x 1,201,121 ops/sec ±0.56% (92 runs sampled)
Function returning explicitly undefined x 1,192,467 ops/sec ±0.33% (89 runs sampled)
Function returning implicitly undefined x 1,219,092 ops/sec ±0.50% (93 runs sampled)
Function returning string x 1,187,380 ops/sec ±0.49% (88 runs sampled)
Function returning integer x 1,197,076 ops/sec ±0.27% (94 runs sampled)
Function returning float x 1,204,427 ops/sec ±0.48% (93 runs sampled)
Function returning functions x 1,156,763 ops/sec ±0.53% (94 runs sampled)
Function returning arrow functions x 1,136,184 ops/sec ±0.21% (90 runs sampled)
Function returning empty object x 1,169,108 ops/sec ±0.18% (95 runs sampled)
Function returning empty array x 1,202,944 ops/sec ±0.48% (90 runs sampled)
```
## includes-vs-raw-comparisson.js
```
using Array.includes x 596,001,123 ops/sec ±0.36% (91 runs sampled)
using Array.includes (first item) x 599,824,916 ops/sec ±0.22% (93 runs sampled)
Using raw comparisson x 614,435,077 ops/sec ±0.36% (88 runs sampled)
Using raw comparisson (first item) x 608,852,328 ops/sec ±0.27% (93 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 621,495 ops/sec ±3.36% (78 runs sampled)
Using ? operator to avoid rejection x 666,207 ops/sec ±3.27% (82 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,192,337 ops/sec ±0.48% (93 runs sampled)
Raw usage underscore usage x 6,099,548 ops/sec ±0.43% (94 runs sampled)
Manipulating private properties using # x 2,161,738 ops/sec ±0.46% (94 runs sampled)
Manipulating private properties using underscore(_) x 597,476,595 ops/sec ±0.39% (93 runs sampled)
Manipulating private properties using Symbol x 603,796,889 ops/sec ±0.34% (91 runs sampled)
Manipulating private properties using PrivateSymbol x 26,413,267 ops/sec ±0.87% (92 runs sampled)
```
## sort-map.js
```
Sort using default x 154,554 ops/sec ±0.49% (92 runs sampled)
Sort using first char x 681,899 ops/sec ±0.48% (87 runs sampled)
Sort using localeCompare x 383,318 ops/sec ±0.41% (91 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
## super-vs-this.js
```
Using super x 14,331,476 ops/sec ±0.48% (91 runs sampled)
Using this x 112,285,064 ops/sec ±0.44% (91 runs sampled)
```
