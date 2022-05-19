# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Thu May 19 2022 04:26:05 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
```
## date-string-coersion.js
```
Using String() x 480,105 ops/sec ±0.55% (93 runs sampled)
Using brackets {} x 496,960 ops/sec ±0.58% (94 runs sampled)
Using '' +  x 495,554 ops/sec ±0.59% (95 runs sampled)
Using date.toString() x 531,032 ops/sec ±0.47% (93 runs sampled)
```
## deleting-properties.js
```
Using delete property x 1,981,834 ops/sec ±0.76% (91 runs sampled)
Using undefined assignment x 987,921,009 ops/sec ±0.44% (92 runs sampled)
```
## error.js
```
Error x 242,744 ops/sec ±0.60% (89 runs sampled)
NodeError x 243,049 ops/sec ±0.71% (86 runs sampled)
NodeError Range x 243,179 ops/sec ±1.35% (88 runs sampled)
```
## function-return.js
```
Function returning null x 901,386 ops/sec ±0.88% (92 runs sampled)
Function returning explicitly undefined x 899,742 ops/sec ±0.48% (89 runs sampled)
Function returning implicitly undefined x 923,201 ops/sec ±0.56% (89 runs sampled)
Function returning string x 895,944 ops/sec ±0.69% (89 runs sampled)
Function returning integer x 914,375 ops/sec ±0.54% (93 runs sampled)
Function returning float x 909,981 ops/sec ±0.69% (92 runs sampled)
Function returning functions x 901,779 ops/sec ±0.57% (95 runs sampled)
Function returning arrow functions x 909,084 ops/sec ±0.44% (91 runs sampled)
Function returning empty object x 911,619 ops/sec ±0.63% (95 runs sampled)
Function returning empty array x 912,403 ops/sec ±0.55% (94 runs sampled)
```
## includes-vs-raw-comparisson.js
```
using Array.includes x 902,471,734 ops/sec ±15.38% (84 runs sampled)
using Array.includes (first item) x 982,151,140 ops/sec ±0.67% (90 runs sampled)
Using raw comparisson x 982,256,990 ops/sec ±0.59% (93 runs sampled)
Using raw comparisson (first item) x 987,085,003 ops/sec ±0.52% (92 runs sampled)
```
## possible-undefined-function.js
```
```
## private-property.js
```
Raw usage private field x 7,372,746 ops/sec ±0.66% (90 runs sampled)
Raw usage underscore usage x 6,308,835 ops/sec ±0.50% (91 runs sampled)
Manipulating private properties using # x 2,237,653 ops/sec ±0.79% (91 runs sampled)
Manipulating private properties using underscore(_) x 961,274,738 ops/sec ±0.55% (93 runs sampled)
Manipulating private properties using Symbol x 962,738,023 ops/sec ±0.51% (94 runs sampled)
Manipulating private properties using PrivateSymbol x 21,320,896 ops/sec ±0.81% (87 runs sampled)
```
## sort-map.js
```
Sort using default x 135,644 ops/sec ±0.67% (91 runs sampled)
Sort using first char x 642,567 ops/sec ±0.65% (91 runs sampled)
Sort using localeCompare x 382,647 ops/sec ±0.72% (93 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
## super-vs-this.js
```
Using super x 17,984,341 ops/sec ±1.15% (85 runs sampled)
Using this x 82,914,286 ops/sec ±6.05% (64 runs sampled)
```
