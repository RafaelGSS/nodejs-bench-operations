# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.15.1`
* __Run:__ Mon Jun 27 2022 00:28:17 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof
```
[True conditional] Using instanceof only x 203,943 ops/sec ±5.12% (58 runs sampled)
[True conditional] Using constructor name x 159,121 ops/sec ±0.77% (94 runs sampled)
[True conditional] Check if property is valid then instanceof  x 159,186 ops/sec ±0.54% (89 runs sampled)
[False conditional] Using instanceof only x 712,644,913 ops/sec ±0.15% (96 runs sampled)
[False conditional] Using constructor name x 713,023,378 ops/sec ±0.15% (96 runs sampled)
[False conditional] Check if property is valid then instanceof  x 713,132,464 ops/sec ±0.20% (98 runs sampled)
```
## date-string-coersion
```
Using String() x 688,044 ops/sec ±0.16% (95 runs sampled)
Using brackets {} x 691,312 ops/sec ±0.21% (96 runs sampled)
Using '' +  x 692,241 ops/sec ±0.16% (97 runs sampled)
Using date.toString() x 738,207 ops/sec ±0.28% (93 runs sampled)
```
## deleting-properties
```
Using delete property x 2,518,573 ops/sec ±0.35% (92 runs sampled)
Using undefined assignment x 711,936,285 ops/sec ±0.13% (97 runs sampled)
```
## error
```
Error x 199,554 ops/sec ±5.22% (55 runs sampled)
NodeError x 157,478 ops/sec ±0.78% (96 runs sampled)
NodeError Range x 157,793 ops/sec ±0.70% (97 runs sampled)
```
## function-return
```
Function returning null x 1,388,151 ops/sec ±0.29% (98 runs sampled)
Function returning explicitly undefined x 1,357,740 ops/sec ±0.12% (98 runs sampled)
Function returning implicitly undefined x 1,387,482 ops/sec ±0.44% (91 runs sampled)
Function returning string x 1,392,974 ops/sec ±0.11% (95 runs sampled)
Function returning integer x 1,414,528 ops/sec ±0.28% (95 runs sampled)
Function returning float x 1,380,484 ops/sec ±0.09% (98 runs sampled)
Function returning functions x 1,355,928 ops/sec ±0.62% (96 runs sampled)
Function returning arrow functions x 1,355,920 ops/sec ±0.16% (97 runs sampled)
Function returning empty object x 1,374,773 ops/sec ±0.18% (99 runs sampled)
Function returning empty array x 1,397,889 ops/sec ±0.35% (97 runs sampled)
```
## includes-vs-raw-comparisson
```
using Array.includes x 711,915,946 ops/sec ±0.11% (96 runs sampled)
using Array.includes (first item) x 710,892,375 ops/sec ±0.16% (94 runs sampled)
Using raw comparisson x 712,250,365 ops/sec ±0.13% (98 runs sampled)
Using raw comparisson (first item) x 710,700,725 ops/sec ±0.14% (98 runs sampled)
```
## possible-undefined-function
```
Using if to check function existence x 805,088 ops/sec ±2.48% (78 runs sampled)
Using ? operator to avoid rejection x 851,776 ops/sec ±2.67% (79 runs sampled)
```
## private-property
```
Raw usage private field x 8,985,565 ops/sec ±0.15% (97 runs sampled)
Raw usage underscore usage x 7,310,823 ops/sec ±0.13% (93 runs sampled)
Manipulating private properties using # x 2,684,647 ops/sec ±0.37% (96 runs sampled)
Manipulating private properties using underscore(_) x 703,340,911 ops/sec ±0.14% (94 runs sampled)
Manipulating private properties using Symbol x 702,234,109 ops/sec ±0.10% (97 runs sampled)
Manipulating private properties using PrivateSymbol x 26,968,554 ops/sec ±0.81% (96 runs sampled)
```
## sort-map
```
Sort using default x 176,062 ops/sec ±0.29% (93 runs sampled)
Sort using first char x 765,977 ops/sec ±0.11% (97 runs sampled)
Sort using localeCompare x 433,823 ops/sec ±0.39% (96 runs sampled)
```
## stream-readable
```
streams.Readable reading 1e3 * some data x 1,780 ops/sec ±0.60% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 406 ops/sec ±0.57% (90 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable
```
streams.Writable writing 1e3 * some data x 2,885 ops/sec ±0.47% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 753 ops/sec ±16.87% (61 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
## super-vs-this
```
Using super x 136,051,990 ops/sec ±0.32% (94 runs sampled)
Using this x 137,414,294 ops/sec ±0.09% (95 runs sampled)
```
