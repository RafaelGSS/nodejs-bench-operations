# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.4.0`
* __Run:__ Mon Jun 27 2022 00:28:17 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof
```
[True conditional] Using instanceof only x 221,441 ops/sec ±5.78% (54 runs sampled)
[True conditional] Using constructor name x 170,742 ops/sec ±0.92% (95 runs sampled)
[True conditional] Check if property is valid then instanceof  x 171,854 ops/sec ±0.70% (95 runs sampled)
[False conditional] Using instanceof only x 824,754,090 ops/sec ±0.23% (96 runs sampled)
[False conditional] Using constructor name x 825,576,101 ops/sec ±0.23% (97 runs sampled)
[False conditional] Check if property is valid then instanceof  x 829,414,331 ops/sec ±0.32% (95 runs sampled)
```
## date-string-coersion
```
Using String() x 731,602 ops/sec ±0.13% (94 runs sampled)
Using brackets {} x 782,277 ops/sec ±0.71% (93 runs sampled)
Using '' +  x 790,682 ops/sec ±0.42% (91 runs sampled)
Using date.toString() x 846,754 ops/sec ±0.17% (94 runs sampled)
```
## deleting-properties
```
Using delete property x 2,771,973 ops/sec ±0.38% (95 runs sampled)
Using undefined assignment x 821,873,524 ops/sec ±0.38% (92 runs sampled)
```
## error
```
Error x 209,974 ops/sec ±5.50% (57 runs sampled)
NodeError x 163,145 ops/sec ±1.25% (91 runs sampled)
NodeError Range x 165,354 ops/sec ±1.03% (93 runs sampled)
```
## function-return
```
Function returning null x 1,737,969 ops/sec ±0.46% (95 runs sampled)
Function returning explicitly undefined x 1,704,293 ops/sec ±0.31% (95 runs sampled)
Function returning implicitly undefined x 1,753,790 ops/sec ±0.39% (96 runs sampled)
Function returning string x 1,733,198 ops/sec ±0.44% (91 runs sampled)
Function returning integer x 1,730,914 ops/sec ±0.33% (95 runs sampled)
Function returning float x 1,702,415 ops/sec ±0.20% (96 runs sampled)
Function returning functions x 1,675,902 ops/sec ±0.26% (90 runs sampled)
Function returning arrow functions x 1,732,345 ops/sec ±0.48% (94 runs sampled)
Function returning empty object x 1,709,338 ops/sec ±0.31% (94 runs sampled)
Function returning empty array x 1,730,296 ops/sec ±0.16% (95 runs sampled)
```
## includes-vs-raw-comparisson
```
using Array.includes x 817,408,285 ops/sec ±0.18% (96 runs sampled)
using Array.includes (first item) x 815,626,523 ops/sec ±0.18% (98 runs sampled)
Using raw comparisson x 827,905,903 ops/sec ±0.36% (91 runs sampled)
Using raw comparisson (first item) x 832,191,132 ops/sec ±0.35% (94 runs sampled)
```
## possible-undefined-function
```
Using if to check function existence x 680,642 ops/sec ±2.67% (79 runs sampled)
Using ? operator to avoid rejection x 657,121 ops/sec ±3.08% (75 runs sampled)
```
## private-property
```
Raw usage private field x 246,400,089 ops/sec ±0.58% (89 runs sampled)
Raw usage underscore usage x 251,567,737 ops/sec ±0.63% (91 runs sampled)
Manipulating private properties using # x 191,015,422 ops/sec ±1.72% (82 runs sampled)
Manipulating private properties using underscore(_) x 152,074,933 ops/sec ±1.09% (88 runs sampled)
Manipulating private properties using Symbol x 156,491,794 ops/sec ±0.90% (89 runs sampled)
Manipulating private properties using PrivateSymbol x 34,788,966 ops/sec ±0.94% (92 runs sampled)
```
## sort-map
```
Sort using default x 208,524 ops/sec ±0.52% (90 runs sampled)
Sort using first char x 876,019 ops/sec ±0.58% (90 runs sampled)
Sort using localeCompare x 815,162 ops/sec ±0.43% (92 runs sampled)
```
## stream-readable
```
streams.Readable reading 1e3 * some data x 1,917 ops/sec ±1.16% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 437 ops/sec ±1.48% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable
```
streams.Writable writing 1e3 * some data x 3,603 ops/sec ±0.48% (94 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 1,036 ops/sec ±16.70% (56 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
## super-vs-this
```
Using super x 129,616,014 ops/sec ±0.48% (93 runs sampled)
Using this x 130,742,509 ops/sec ±0.45% (94 runs sampled)
```
