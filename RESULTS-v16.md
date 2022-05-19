# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Thu May 19 2022 04:21:24 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
[True conditional] Using instanceof only x 164,033 ops/sec ±4.91% (58 runs sampled)
[True conditional] Using constructor name x 133,258 ops/sec ±0.66% (94 runs sampled)
[True conditional] Check if property is valid then instanceof  x 134,382 ops/sec ±0.71% (94 runs sampled)
[False conditional] Using instanceof only x 993,455,374 ops/sec ±0.44% (93 runs sampled)
[False conditional] Using constructor name x 994,697,147 ops/sec ±0.47% (93 runs sampled)
[False conditional] Check if property is valid then instanceof  x 993,156,278 ops/sec ±0.53% (96 runs sampled)
```
## date-string-coersion.js
```
Using String() x 489,290 ops/sec ±0.64% (90 runs sampled)
Using brackets {} x 498,247 ops/sec ±0.50% (90 runs sampled)
Using '' +  x 495,175 ops/sec ±0.74% (85 runs sampled)
Using date.toString() x 540,246 ops/sec ±0.65% (91 runs sampled)
```
## deleting-properties.js
```
Using delete property x 2,073,973 ops/sec ±0.60% (93 runs sampled)
Using undefined assignment x 993,776,219 ops/sec ±0.57% (94 runs sampled)
```
## error.js
```
Error x 160,693 ops/sec ±4.48% (59 runs sampled)
NodeError x 132,344 ops/sec ±0.84% (93 runs sampled)
NodeError Range x 133,005 ops/sec ±0.72% (96 runs sampled)
```
## function-return.js
```
Function returning null x 854,421 ops/sec ±0.50% (90 runs sampled)
Function returning explicitly undefined x 850,361 ops/sec ±0.58% (94 runs sampled)
Function returning implicitly undefined x 846,495 ops/sec ±0.79% (93 runs sampled)
Function returning string x 858,280 ops/sec ±0.41% (93 runs sampled)
Function returning integer x 856,368 ops/sec ±0.72% (92 runs sampled)
Function returning float x 856,323 ops/sec ±0.57% (92 runs sampled)
Function returning functions x 847,039 ops/sec ±0.56% (92 runs sampled)
Function returning arrow functions x 846,769 ops/sec ±0.74% (94 runs sampled)
Function returning empty object x 862,328 ops/sec ±0.39% (95 runs sampled)
Function returning empty array x 857,964 ops/sec ±0.44% (94 runs sampled)
```
## includes-vs-raw-comparisson.js
```
using Array.includes x 993,863,175 ops/sec ±0.65% (92 runs sampled)
using Array.includes (first item) x 994,715,453 ops/sec ±0.33% (92 runs sampled)
Using raw comparisson x 993,987,082 ops/sec ±0.58% (91 runs sampled)
Using raw comparisson (first item) x 978,284,665 ops/sec ±0.67% (94 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 589,455 ops/sec ±2.38% (77 runs sampled)
Using ? operator to avoid rejection x 617,868 ops/sec ±2.07% (83 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,514,383 ops/sec ±0.57% (93 runs sampled)
Raw usage underscore usage x 6,507,574 ops/sec ±0.61% (88 runs sampled)
Manipulating private properties using # x 2,377,446 ops/sec ±0.58% (94 runs sampled)
Manipulating private properties using underscore(_) x 976,080,672 ops/sec ±0.54% (93 runs sampled)
Manipulating private properties using Symbol x 969,599,621 ops/sec ±0.44% (92 runs sampled)
Manipulating private properties using PrivateSymbol x 22,351,955 ops/sec ±1.60% (94 runs sampled)
```
## sort-map.js
```
Sort using default x 163,866 ops/sec ±0.58% (89 runs sampled)
Sort using first char x 658,416 ops/sec ±0.77% (93 runs sampled)
Sort using localeCompare x 387,915 ops/sec ±0.64% (90 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,366 ops/sec ±21.04% (80 runs sampled)
streams.web.Readable reading 1e3 * some data x 319 ops/sec ±6.07% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,705 ops/sec ±1.01% (87 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 724 ops/sec ±16.42% (57 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
## super-vs-this.js
```
Using super x 130,480,225 ops/sec ±0.63% (91 runs sampled)
Using this x 130,252,960 ops/sec ±0.44% (92 runs sampled)
```
