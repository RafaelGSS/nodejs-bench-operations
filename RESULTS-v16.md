# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Wed Mar 23 2022 13:50:49 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
[True conditional] Using instanceof only x 168,628 ops/sec ±4.80% (58 runs sampled)
[True conditional] Using constructor name x 132,592 ops/sec ±0.82% (92 runs sampled)
[True conditional] Check if property is valid then instanceof  x 137,924 ops/sec ±0.58% (92 runs sampled)
[False conditional] Using instanceof only x 1,018,091,073 ops/sec ±0.34% (97 runs sampled)
[False conditional] Using constructor name x 1,015,009,393 ops/sec ±0.41% (95 runs sampled)
[False conditional] Check if property is valid then instanceof  x 1,005,081,301 ops/sec ±0.64% (92 runs sampled)
```
## function-return.js
```
Function returning null x 868,713 ops/sec ±0.49% (91 runs sampled)
Function returning explicitly undefined x 866,746 ops/sec ±0.50% (94 runs sampled)
Function returning implicitly undefined x 868,780 ops/sec ±0.64% (93 runs sampled)
Function returning string x 867,463 ops/sec ±0.47% (93 runs sampled)
Function returning integer x 877,834 ops/sec ±0.54% (94 runs sampled)
Function returning float x 873,624 ops/sec ±0.41% (91 runs sampled)
Function returning functions x 860,069 ops/sec ±0.34% (96 runs sampled)
Function returning arrow functions x 853,367 ops/sec ±0.70% (89 runs sampled)
Function returning empty object x 826,786 ops/sec ±0.67% (91 runs sampled)
Function returning empty array x 843,034 ops/sec ±0.77% (87 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 587,987 ops/sec ±2.10% (79 runs sampled)
Using ? operator to avoid rejection x 605,417 ops/sec ±1.98% (81 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,547,101 ops/sec ±1.03% (92 runs sampled)
Raw usage underscore usage x 6,393,628 ops/sec ±1.05% (90 runs sampled)
Manipulating private properties using # x 2,358,362 ops/sec ±0.74% (91 runs sampled)
Manipulating private properties using underscore(_) x 962,713,929 ops/sec ±0.48% (93 runs sampled)
Manipulating private properties using Symbol x 971,511,412 ops/sec ±0.63% (89 runs sampled)
Manipulating private properties using PrivateSymbol x 22,738,899 ops/sec ±0.65% (89 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,327 ops/sec ±24.35% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 323 ops/sec ±5.57% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,637 ops/sec ±1.28% (89 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 349 ops/sec ±17.28% (33 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
