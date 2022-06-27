# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v18.4.0`
* __Run:__ Mon Jun 27 2022 00:15:06 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
[True conditional] Using instanceof only x 154,099 ops/sec ±6.17% (52 runs sampled)
[True conditional] Using constructor name x 123,098 ops/sec ±1.26% (90 runs sampled)
[True conditional] Check if property is valid then instanceof  x 119,377 ops/sec ±1.27% (87 runs sampled)
[False conditional] Using instanceof only x 574,994,467 ops/sec ±1.04% (90 runs sampled)
[False conditional] Using constructor name x 565,633,908 ops/sec ±1.12% (91 runs sampled)
[False conditional] Check if property is valid then instanceof  x 567,196,836 ops/sec ±1.18% (93 runs sampled)
```
## date-string-coersion.js
```
Using String() x 512,027 ops/sec ±1.10% (87 runs sampled)
Using brackets {} x 545,545 ops/sec ±1.00% (90 runs sampled)
Using '' +  x 529,588 ops/sec ±0.99% (91 runs sampled)
Using date.toString() x 591,142 ops/sec ±1.22% (85 runs sampled)
```
## deleting-properties.js
```
Using delete property x 1,982,159 ops/sec ±1.23% (87 runs sampled)
Using undefined assignment x 597,102,990 ops/sec ±1.02% (90 runs sampled)
```
## error.js
```
Error x 151,864 ops/sec ±5.93% (56 runs sampled)
NodeError x 118,157 ops/sec ±1.23% (87 runs sampled)
NodeError Range x 118,136 ops/sec ±1.32% (90 runs sampled)
```
## function-return.js
```
Function returning null x 1,198,086 ops/sec ±1.05% (89 runs sampled)
Function returning explicitly undefined x 1,168,950 ops/sec ±1.33% (85 runs sampled)
Function returning implicitly undefined x 1,228,927 ops/sec ±1.14% (89 runs sampled)
Function returning string x 1,188,419 ops/sec ±0.79% (89 runs sampled)
Function returning integer x 1,176,917 ops/sec ±1.08% (90 runs sampled)
Function returning float x 1,212,373 ops/sec ±0.71% (86 runs sampled)
Function returning functions x 1,184,968 ops/sec ±1.12% (86 runs sampled)
Function returning arrow functions x 1,178,194 ops/sec ±1.16% (89 runs sampled)
Function returning empty object x 1,213,211 ops/sec ±0.81% (94 runs sampled)
Function returning empty array x 1,200,033 ops/sec ±0.96% (89 runs sampled)
```
## includes-vs-raw-comparisson.js
```
using Array.includes x 587,276,767 ops/sec ±1.17% (89 runs sampled)
using Array.includes (first item) x 586,514,636 ops/sec ±0.98% (91 runs sampled)
Using raw comparisson x 583,045,729 ops/sec ±0.75% (90 runs sampled)
Using raw comparisson (first item) x 579,855,945 ops/sec ±0.83% (91 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 484,817 ops/sec ±3.35% (77 runs sampled)
Using ? operator to avoid rejection x 529,747 ops/sec ±2.94% (77 runs sampled)
```
## private-property.js
```
Raw usage private field x 201,595,522 ops/sec ±1.29% (86 runs sampled)
Raw usage underscore usage x 205,695,615 ops/sec ±1.39% (86 runs sampled)
Manipulating private properties using # x 143,244,182 ops/sec ±1.62% (85 runs sampled)
Manipulating private properties using underscore(_) x 121,160,020 ops/sec ±1.26% (84 runs sampled)
Manipulating private properties using Symbol x 115,071,343 ops/sec ±1.10% (91 runs sampled)
Manipulating private properties using PrivateSymbol x 24,365,568 ops/sec ±1.65% (83 runs sampled)
```
## sort-map.js
```
Sort using default x 146,753 ops/sec ±1.04% (85 runs sampled)
Sort using first char x 615,347 ops/sec ±1.05% (88 runs sampled)
Sort using localeCompare x 579,237 ops/sec ±1.08% (89 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,257 ops/sec ±23.89% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 346 ops/sec ±1.43% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,487 ops/sec ±1.11% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 860 ops/sec ±16.43% (54 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
## super-vs-this.js
```
Using super x 110,516,188 ops/sec ±0.92% (89 runs sampled)
Using this x 109,185,314 ops/sec ±0.83% (83 runs sampled)
```
