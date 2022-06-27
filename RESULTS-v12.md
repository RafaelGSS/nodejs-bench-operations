# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.12`
* __Run:__ Mon Jun 27 2022 00:28:18 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof
```
```
## date-string-coersion
```
Using String() x 520,463 ops/sec ±0.94% (89 runs sampled)
Using brackets {} x 553,390 ops/sec ±1.04% (88 runs sampled)
Using '' +  x 538,954 ops/sec ±1.38% (86 runs sampled)
Using date.toString() x 557,950 ops/sec ±1.72% (86 runs sampled)
```
## deleting-properties
```
Using delete property x 1,881,254 ops/sec ±1.40% (83 runs sampled)
Using undefined assignment x 749,838,712 ops/sec ±0.94% (86 runs sampled)
```
## error
```
Error x 244,846 ops/sec ±1.25% (83 runs sampled)
NodeError x 243,128 ops/sec ±1.53% (83 runs sampled)
NodeError Range x 240,042 ops/sec ±1.70% (78 runs sampled)
```
## function-return
```
Function returning null x 1,185,037 ops/sec ±1.24% (88 runs sampled)
Function returning explicitly undefined x 1,160,537 ops/sec ±1.12% (88 runs sampled)
Function returning implicitly undefined x 1,219,580 ops/sec ±1.44% (88 runs sampled)
Function returning string x 1,180,640 ops/sec ±1.46% (89 runs sampled)
Function returning integer x 1,185,545 ops/sec ±1.89% (83 runs sampled)
Function returning float x 1,212,581 ops/sec ±1.35% (87 runs sampled)
Function returning functions x 1,110,149 ops/sec ±1.79% (86 runs sampled)
Function returning arrow functions x 1,192,616 ops/sec ±1.10% (86 runs sampled)
Function returning empty object x 1,200,128 ops/sec ±1.17% (88 runs sampled)
Function returning empty array x 1,150,713 ops/sec ±1.47% (86 runs sampled)
```
## includes-vs-raw-comparisson
```
using Array.includes x 772,181,955 ops/sec ±0.97% (85 runs sampled)
using Array.includes (first item) x 739,340,450 ops/sec ±1.05% (89 runs sampled)
Using raw comparisson x 739,333,517 ops/sec ±1.01% (90 runs sampled)
Using raw comparisson (first item) x 749,812,427 ops/sec ±0.90% (89 runs sampled)
```
## possible-undefined-function
```
```
## private-property
```
Raw usage private field x 6,180,380 ops/sec ±1.31% (86 runs sampled)
Raw usage underscore usage x 5,328,865 ops/sec ±1.46% (86 runs sampled)
Manipulating private properties using # x 1,821,118 ops/sec ±1.72% (86 runs sampled)
Manipulating private properties using underscore(_) x 580,252,786 ops/sec ±1.16% (88 runs sampled)
Manipulating private properties using Symbol x 588,019,037 ops/sec ±1.03% (86 runs sampled)
Manipulating private properties using PrivateSymbol x 20,646,620 ops/sec ±1.20% (87 runs sampled)
```
## sort-map
```
Sort using default x 129,400 ops/sec ±1.27% (84 runs sampled)
Sort using first char x 639,357 ops/sec ±1.61% (83 runs sampled)
Sort using localeCompare x 347,843 ops/sec ±1.54% (84 runs sampled)
```
## stream-readable
```
```
## stream-writable
```
```
## super-vs-this
```
Using super x 14,469,244 ops/sec ±0.92% (89 runs sampled)
Using this x 132,970,999 ops/sec ±2.37% (83 runs sampled)
```
