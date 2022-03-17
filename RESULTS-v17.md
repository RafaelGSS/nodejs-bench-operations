# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v17.7.1`
* __Run:__ Thu Mar 17 2022 20:44:52 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 848,869 ops/sec ±0.65% (92 runs sampled)
Function returning explicitly undefined x 852,701 ops/sec ±0.49% (91 runs sampled)
Function returning implicitly undefined x 861,016 ops/sec ±0.59% (92 runs sampled)
Function returning string x 858,427 ops/sec ±0.43% (92 runs sampled)
Function returning integer x 873,582 ops/sec ±0.81% (95 runs sampled)
Function returning float x 860,188 ops/sec ±1.34% (87 runs sampled)
Function returning functions x 857,211 ops/sec ±0.41% (92 runs sampled)
Function returning arrow functions x 853,631 ops/sec ±0.72% (92 runs sampled)
Function returning empty object x 864,889 ops/sec ±0.34% (93 runs sampled)
Function returning empty array x 870,992 ops/sec ±0.48% (94 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 564,278 ops/sec ±2.31% (80 runs sampled)
Using ? operator to avoid rejection x 575,871 ops/sec ±2.36% (81 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,789,375 ops/sec ±0.75% (86 runs sampled)
Raw usage underscore usage x 6,636,852 ops/sec ±0.54% (92 runs sampled)
Manipulating private properties using # x 2,461,959 ops/sec ±0.48% (92 runs sampled)
Manipulating private properties using underscore(_) x 968,639,708 ops/sec ±0.55% (90 runs sampled)
Manipulating private properties using Symbol x 974,449,587 ops/sec ±0.34% (92 runs sampled)
Manipulating private properties using PrivateSymbol x 22,977,197 ops/sec ±0.43% (91 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,295 ops/sec ±24.04% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 305 ops/sec ±4.56% (85 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 3,066 ops/sec ±0.96% (88 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 682 ops/sec ±15.52% (61 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
