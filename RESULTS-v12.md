# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Mon Jun 27 2022 00:15:02 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
```
## date-string-coersion.js
```
Using String() x 637,462 ops/sec ±0.20% (93 runs sampled)
Using brackets {} x 648,613 ops/sec ±0.12% (95 runs sampled)
Using '' +  x 648,581 ops/sec ±0.22% (98 runs sampled)
Using date.toString() x 695,022 ops/sec ±0.24% (92 runs sampled)
```
## deleting-properties.js
```
Using delete property x 2,375,461 ops/sec ±0.38% (95 runs sampled)
Using undefined assignment x 708,632,472 ops/sec ±0.13% (97 runs sampled)
```
## error.js
```
Error x 297,338 ops/sec ±0.16% (96 runs sampled)
NodeError x 298,274 ops/sec ±0.26% (87 runs sampled)
NodeError Range x 296,070 ops/sec ±0.44% (87 runs sampled)
```
## function-return.js
```
Function returning null x 1,325,901 ops/sec ±0.48% (95 runs sampled)
Function returning explicitly undefined x 1,327,102 ops/sec ±0.22% (97 runs sampled)
Function returning implicitly undefined x 1,363,023 ops/sec ±0.44% (97 runs sampled)
Function returning string x 1,355,475 ops/sec ±0.33% (96 runs sampled)
Function returning integer x 1,359,046 ops/sec ±0.32% (95 runs sampled)
Function returning float x 1,350,136 ops/sec ±0.33% (96 runs sampled)
Function returning functions x 1,303,126 ops/sec ±0.44% (95 runs sampled)
Function returning arrow functions x 1,311,838 ops/sec ±0.35% (96 runs sampled)
Function returning empty object x 1,344,437 ops/sec ±0.51% (96 runs sampled)
Function returning empty array x 1,347,094 ops/sec ±0.30% (95 runs sampled)
```
## includes-vs-raw-comparisson.js
```
using Array.includes x 708,684,205 ops/sec ±0.15% (97 runs sampled)
using Array.includes (first item) x 709,145,753 ops/sec ±0.15% (98 runs sampled)
Using raw comparisson x 710,772,312 ops/sec ±0.13% (99 runs sampled)
Using raw comparisson (first item) x 711,370,565 ops/sec ±0.13% (96 runs sampled)
```
## possible-undefined-function.js
```
```
## private-property.js
```
Raw usage private field x 8,258,714 ops/sec ±0.25% (91 runs sampled)
Raw usage underscore usage x 7,329,120 ops/sec ±0.17% (95 runs sampled)
Manipulating private properties using # x 2,535,392 ops/sec ±0.31% (95 runs sampled)
Manipulating private properties using underscore(_) x 698,421,900 ops/sec ±0.26% (96 runs sampled)
Manipulating private properties using Symbol x 697,145,632 ops/sec ±0.19% (95 runs sampled)
Manipulating private properties using PrivateSymbol x 25,899,643 ops/sec ±0.13% (94 runs sampled)
```
## sort-map.js
```
Sort using default x 163,484 ops/sec ±0.48% (93 runs sampled)
Sort using first char x 662,828 ops/sec ±1.05% (90 runs sampled)
Sort using localeCompare x 399,496 ops/sec ±0.65% (95 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
## super-vs-this.js
```
Using super x 19,016,359 ops/sec ±0.22% (97 runs sampled)
Using this x 114,199,409 ops/sec ±0.43% (95 runs sampled)
```
