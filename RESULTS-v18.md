# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v18.0.0`
* __Run:__ Thu May 19 2022 04:29:37 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
[True conditional] Using instanceof only x 95,109 ops/sec ±7.92% (49 runs sampled)
[True conditional] Using constructor name x 71,677 ops/sec ±4.99% (72 runs sampled)
[True conditional] Check if property is valid then instanceof  x 112,051 ops/sec ±4.42% (80 runs sampled)
[False conditional] Using instanceof only x 980,651,146 ops/sec ±0.72% (91 runs sampled)
[False conditional] Using constructor name x 961,063,971 ops/sec ±1.04% (90 runs sampled)
[False conditional] Check if property is valid then instanceof  x 934,021,830 ops/sec ±2.73% (89 runs sampled)
```
## date-string-coersion.js
```
Using String() x 423,239 ops/sec ±4.86% (80 runs sampled)
Using brackets {} x 505,163 ops/sec ±1.69% (89 runs sampled)
Using '' +  x 510,757 ops/sec ±1.21% (94 runs sampled)
Using date.toString() x 542,767 ops/sec ±0.87% (94 runs sampled)
```
## deleting-properties.js
```
Using delete property x 1,963,563 ops/sec ±0.60% (92 runs sampled)
Using undefined assignment x 987,819,611 ops/sec ±0.61% (91 runs sampled)
```
## error.js
```
Error x 154,544 ops/sec ±4.76% (59 runs sampled)
NodeError x 124,149 ops/sec ±1.07% (92 runs sampled)
NodeError Range x 112,677 ops/sec ±4.62% (82 runs sampled)
```
## function-return.js
```
Function returning null x 950,761 ops/sec ±0.76% (92 runs sampled)
Function returning explicitly undefined x 952,398 ops/sec ±0.87% (93 runs sampled)
Function returning implicitly undefined x 959,342 ops/sec ±0.86% (91 runs sampled)
Function returning string x 945,927 ops/sec ±1.76% (91 runs sampled)
Function returning integer x 956,528 ops/sec ±0.78% (93 runs sampled)
Function returning float x 960,560 ops/sec ±0.50% (92 runs sampled)
Function returning functions x 949,759 ops/sec ±0.46% (93 runs sampled)
Function returning arrow functions x 938,453 ops/sec ±0.74% (90 runs sampled)
Function returning empty object x 962,249 ops/sec ±0.59% (94 runs sampled)
Function returning empty array x 968,231 ops/sec ±0.42% (93 runs sampled)
```
## includes-vs-raw-comparisson.js
```
using Array.includes x 86,793,443 ops/sec ±5.83% (85 runs sampled)
using Array.includes (first item) x 101,746,905 ops/sec ±3.17% (86 runs sampled)
Using raw comparisson x 986,493,995 ops/sec ±0.57% (93 runs sampled)
Using raw comparisson (first item) x 987,922,782 ops/sec ±0.63% (93 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 553,189 ops/sec ±4.11% (71 runs sampled)
Using ? operator to avoid rejection x 623,438 ops/sec ±1.91% (85 runs sampled)
```
## private-property.js
```
Raw usage private field x 218,625,378 ops/sec ±1.34% (89 runs sampled)
Raw usage underscore usage x 197,294,866 ops/sec ±0.50% (90 runs sampled)
Manipulating private properties using # x 136,454,733 ops/sec ±0.50% (93 runs sampled)
Manipulating private properties using underscore(_) x 137,478,844 ops/sec ±0.37% (94 runs sampled)
Manipulating private properties using Symbol x 137,398,330 ops/sec ±0.43% (94 runs sampled)
Manipulating private properties using PrivateSymbol x 24,579,704 ops/sec ±0.54% (93 runs sampled)
```
## sort-map.js
```
Sort using default x 163,961 ops/sec ±0.66% (91 runs sampled)
Sort using first char x 671,181 ops/sec ±0.62% (92 runs sampled)
Sort using localeCompare x 663,796 ops/sec ±0.79% (91 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,346 ops/sec ±27.86% (81 runs sampled)
streams.web.Readable reading 1e3 * some data x 327 ops/sec ±4.68% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 3,001 ops/sec ±0.97% (90 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 745 ops/sec ±23.42% (44 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
## super-vs-this.js
```
Using super x 17,734,530 ops/sec ±0.84% (92 runs sampled)
Using this x 129,394,535 ops/sec ±0.43% (95 runs sampled)
```
