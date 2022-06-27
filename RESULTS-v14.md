# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.3`
* __Run:__ Mon Jun 27 2022 00:28:24 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof
```
[True conditional] Using instanceof only x 230,766 ops/sec ±1.33% (84 runs sampled)
[True conditional] Using constructor name x 232,955 ops/sec ±1.03% (86 runs sampled)
[True conditional] Check if property is valid then instanceof  x 231,073 ops/sec ±1.03% (83 runs sampled)
[False conditional] Using instanceof only x 713,472,974 ops/sec ±1.04% (91 runs sampled)
[False conditional] Using constructor name x 714,550,183 ops/sec ±1.02% (87 runs sampled)
[False conditional] Check if property is valid then instanceof  x 715,434,410 ops/sec ±0.71% (92 runs sampled)
```
## date-string-coersion
```
Using String() x 507,975 ops/sec ±0.77% (92 runs sampled)
Using brackets {} x 518,149 ops/sec ±0.83% (92 runs sampled)
Using '' +  x 518,812 ops/sec ±1.15% (86 runs sampled)
Using date.toString() x 549,473 ops/sec ±0.97% (90 runs sampled)
```
## deleting-properties
```
Using delete property x 1,825,290 ops/sec ±1.05% (88 runs sampled)
Using undefined assignment x 707,254,745 ops/sec ±0.99% (90 runs sampled)
```
## error
```
Error x 227,520 ops/sec ±0.80% (90 runs sampled)
NodeError x 224,422 ops/sec ±1.10% (85 runs sampled)
NodeError Range x 224,640 ops/sec ±1.00% (77 runs sampled)
```
## function-return
```
Function returning null x 1,093,271 ops/sec ±1.11% (87 runs sampled)
Function returning explicitly undefined x 1,045,332 ops/sec ±1.54% (90 runs sampled)
Function returning implicitly undefined x 1,090,138 ops/sec ±1.05% (89 runs sampled)
Function returning string x 1,069,776 ops/sec ±1.04% (86 runs sampled)
Function returning integer x 1,082,284 ops/sec ±1.51% (90 runs sampled)
Function returning float x 1,039,517 ops/sec ±2.04% (84 runs sampled)
Function returning functions x 1,033,934 ops/sec ±1.57% (83 runs sampled)
Function returning arrow functions x 1,062,342 ops/sec ±1.37% (88 runs sampled)
Function returning empty object x 1,069,417 ops/sec ±0.99% (92 runs sampled)
Function returning empty array x 1,069,291 ops/sec ±1.81% (91 runs sampled)
```
## includes-vs-raw-comparisson
```
using Array.includes x 695,314,732 ops/sec ±1.81% (89 runs sampled)
using Array.includes (first item) x 680,234,739 ops/sec ±1.45% (87 runs sampled)
Using raw comparisson x 707,311,449 ops/sec ±0.92% (86 runs sampled)
Using raw comparisson (first item) x 707,883,763 ops/sec ±1.14% (90 runs sampled)
```
## possible-undefined-function
```
Using if to check function existence x 547,019 ops/sec ±4.54% (69 runs sampled)
Using ? operator to avoid rejection x 612,406 ops/sec ±3.80% (74 runs sampled)
```
## private-property
```
Raw usage private field x 5,993,144 ops/sec ±1.08% (87 runs sampled)
Raw usage underscore usage x 4,783,864 ops/sec ±1.29% (87 runs sampled)
Manipulating private properties using # x 1,823,678 ops/sec ±1.23% (88 runs sampled)
Manipulating private properties using underscore(_) x 580,305,598 ops/sec ±0.75% (90 runs sampled)
Manipulating private properties using Symbol x 574,652,950 ops/sec ±0.88% (87 runs sampled)
Manipulating private properties using PrivateSymbol x 24,119,459 ops/sec ±1.38% (87 runs sampled)
```
## sort-map
```
Sort using default x 132,059 ops/sec ±1.10% (89 runs sampled)
Sort using first char x 610,476 ops/sec ±1.68% (87 runs sampled)
Sort using localeCompare x 358,345 ops/sec ±0.86% (88 runs sampled)
```
## stream-readable
```
```
## stream-writable
```
```
## super-vs-this
```
Using super x 13,016,614 ops/sec ±1.12% (88 runs sampled)
Using this x 137,546,402 ops/sec ±1.04% (88 runs sampled)
```
