# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Thu May 19 2022 04:17:19 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
[True conditional] Using instanceof only x 237,542 ops/sec ±1.10% (91 runs sampled)
[True conditional] Using constructor name x 236,450 ops/sec ±0.68% (86 runs sampled)
[True conditional] Check if property is valid then instanceof  x 238,352 ops/sec ±0.57% (86 runs sampled)
[False conditional] Using instanceof only x 982,485,306 ops/sec ±0.76% (94 runs sampled)
[False conditional] Using constructor name x 982,133,268 ops/sec ±0.61% (91 runs sampled)
[False conditional] Check if property is valid then instanceof  x 989,292,732 ops/sec ±0.67% (89 runs sampled)
```
## date-string-coersion.js
```
Using String() x 482,453 ops/sec ±0.70% (94 runs sampled)
Using brackets {} x 486,900 ops/sec ±0.56% (92 runs sampled)
Using '' +  x 479,188 ops/sec ±0.79% (89 runs sampled)
Using date.toString() x 529,342 ops/sec ±0.61% (90 runs sampled)
```
## deleting-properties.js
```
Using delete property x 1,988,707 ops/sec ±0.68% (91 runs sampled)
Using undefined assignment x 984,320,325 ops/sec ±0.55% (91 runs sampled)
```
## error.js
```
Error x 225,725 ops/sec ±0.71% (84 runs sampled)
NodeError x 229,526 ops/sec ±0.59% (86 runs sampled)
NodeError Range x 226,889 ops/sec ±0.66% (86 runs sampled)
```
## function-return.js
```
Function returning null x 882,006 ops/sec ±0.69% (93 runs sampled)
Function returning explicitly undefined x 885,685 ops/sec ±0.43% (92 runs sampled)
Function returning implicitly undefined x 873,959 ops/sec ±0.78% (89 runs sampled)
Function returning string x 874,408 ops/sec ±0.58% (88 runs sampled)
Function returning integer x 883,670 ops/sec ±0.76% (88 runs sampled)
Function returning float x 885,153 ops/sec ±0.53% (94 runs sampled)
Function returning functions x 864,691 ops/sec ±0.65% (87 runs sampled)
Function returning arrow functions x 870,465 ops/sec ±0.92% (84 runs sampled)
Function returning empty object x 881,903 ops/sec ±0.75% (94 runs sampled)
Function returning empty array x 885,806 ops/sec ±0.31% (96 runs sampled)
```
## includes-vs-raw-comparisson.js
```
using Array.includes x 983,374,108 ops/sec ±0.71% (90 runs sampled)
using Array.includes (first item) x 990,577,033 ops/sec ±0.50% (93 runs sampled)
Using raw comparisson x 996,787,206 ops/sec ±0.48% (93 runs sampled)
Using raw comparisson (first item) x 992,363,279 ops/sec ±0.67% (94 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 573,669 ops/sec ±2.30% (79 runs sampled)
Using ? operator to avoid rejection x 604,561 ops/sec ±1.88% (85 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,435,816 ops/sec ±0.89% (88 runs sampled)
Raw usage underscore usage x 6,160,552 ops/sec ±0.82% (89 runs sampled)
Manipulating private properties using # x 2,217,415 ops/sec ±0.57% (93 runs sampled)
Manipulating private properties using underscore(_) x 967,857,432 ops/sec ±0.63% (92 runs sampled)
Manipulating private properties using Symbol x 972,018,446 ops/sec ±0.47% (96 runs sampled)
Manipulating private properties using PrivateSymbol x 23,322,423 ops/sec ±0.47% (94 runs sampled)
```
## sort-map.js
```
Sort using default x 159,667 ops/sec ±0.68% (91 runs sampled)
Sort using first char x 676,359 ops/sec ±0.68% (91 runs sampled)
Sort using localeCompare x 393,794 ops/sec ±0.90% (89 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
## super-vs-this.js
```
Using super x 17,522,179 ops/sec ±1.22% (91 runs sampled)
Using this x 126,297,997 ops/sec ±2.09% (92 runs sampled)
```
