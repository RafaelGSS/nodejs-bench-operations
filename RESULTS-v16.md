# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.15.1`
* __Run:__ Mon Jun 27 2022 00:15:05 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
[True conditional] Using instanceof only x 145,392 ops/sec ±5.26% (56 runs sampled)
[True conditional] Using constructor name x 110,642 ops/sec ±1.65% (84 runs sampled)
[True conditional] Check if property is valid then instanceof  x 112,723 ops/sec ±1.80% (84 runs sampled)
[False conditional] Using instanceof only x 666,660,802 ops/sec ±1.19% (84 runs sampled)
[False conditional] Using constructor name x 681,689,643 ops/sec ±1.51% (90 runs sampled)
[False conditional] Check if property is valid then instanceof  x 658,946,681 ops/sec ±1.47% (83 runs sampled)
```
## date-string-coersion.js
```
Using String() x 465,703 ops/sec ±1.59% (80 runs sampled)
Using brackets {} x 496,618 ops/sec ±1.27% (89 runs sampled)
Using '' +  x 502,922 ops/sec ±1.34% (87 runs sampled)
Using date.toString() x 525,649 ops/sec ±1.15% (83 runs sampled)
```
## deleting-properties.js
```
Using delete property x 1,739,446 ops/sec ±1.48% (87 runs sampled)
Using undefined assignment x 666,412,868 ops/sec ±1.43% (83 runs sampled)
```
## error.js
```
Error x 137,577 ops/sec ±5.96% (53 runs sampled)
NodeError x 107,926 ops/sec ±1.75% (83 runs sampled)
NodeError Range x 109,432 ops/sec ±1.51% (87 runs sampled)
```
## function-return.js
```
Function returning null x 910,363 ops/sec ±1.65% (84 runs sampled)
Function returning explicitly undefined x 899,314 ops/sec ±1.63% (83 runs sampled)
Function returning implicitly undefined x 918,430 ops/sec ±1.34% (85 runs sampled)
Function returning string x 888,404 ops/sec ±1.28% (87 runs sampled)
Function returning integer x 902,744 ops/sec ±1.65% (85 runs sampled)
Function returning float x 893,750 ops/sec ±1.28% (85 runs sampled)
Function returning functions x 870,845 ops/sec ±1.18% (86 runs sampled)
Function returning arrow functions x 856,362 ops/sec ±1.45% (88 runs sampled)
Function returning empty object x 923,212 ops/sec ±1.18% (87 runs sampled)
Function returning empty array x 920,432 ops/sec ±1.59% (84 runs sampled)
```
## includes-vs-raw-comparisson.js
```
using Array.includes x 663,732,807 ops/sec ±1.36% (84 runs sampled)
using Array.includes (first item) x 683,280,602 ops/sec ±1.12% (88 runs sampled)
Using raw comparisson x 669,620,871 ops/sec ±1.40% (88 runs sampled)
Using raw comparisson (first item) x 678,735,418 ops/sec ±1.46% (86 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 550,668 ops/sec ±4.18% (69 runs sampled)
Using ? operator to avoid rejection x 610,448 ops/sec ±3.56% (71 runs sampled)
```
## private-property.js
```
Raw usage private field x 5,769,342 ops/sec ±1.62% (86 runs sampled)
Raw usage underscore usage x 4,861,038 ops/sec ±1.56% (85 runs sampled)
Manipulating private properties using # x 1,801,311 ops/sec ±1.53% (82 runs sampled)
Manipulating private properties using underscore(_) x 533,384,115 ops/sec ±1.12% (87 runs sampled)
Manipulating private properties using Symbol x 548,136,480 ops/sec ±1.68% (83 runs sampled)
Manipulating private properties using PrivateSymbol x 21,564,656 ops/sec ±2.92% (80 runs sampled)
```
## sort-map.js
```
Sort using default x 136,689 ops/sec ±1.74% (83 runs sampled)
Sort using first char x 589,215 ops/sec ±1.83% (82 runs sampled)
Sort using localeCompare x 311,342 ops/sec ±1.31% (87 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,003 ops/sec ±20.92% (74 runs sampled)
streams.web.Readable reading 1e3 * some data x 283 ops/sec ±4.48% (79 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 1,760 ops/sec ±2.00% (83 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 586 ops/sec ±18.03% (36 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
## super-vs-this.js
```
Using super x 131,368,299 ops/sec ±1.58% (85 runs sampled)
Using this x 118,488,004 ops/sec ±2.06% (78 runs sampled)
```
