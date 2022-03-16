# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.7.1`
* __Run:__ Wed Mar 16 2022 18:52:11 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,092,576 ops/sec ±1.16% (85 runs sampled)
Function returning explicitly undefined x 1,043,195 ops/sec ±1.75% (81 runs sampled)
Function returning implicitly undefined x 1,115,566 ops/sec ±0.91% (87 runs sampled)
Function returning string x 1,080,842 ops/sec ±1.01% (88 runs sampled)
Function returning integer x 1,079,197 ops/sec ±1.21% (85 runs sampled)
Function returning float x 1,081,431 ops/sec ±1.38% (85 runs sampled)
Function returning functions x 1,053,184 ops/sec ±1.05% (87 runs sampled)
Function returning arrow functions x 1,059,540 ops/sec ±1.08% (88 runs sampled)
Function returning empty object x 1,076,097 ops/sec ±1.00% (87 runs sampled)
Function returning empty array x 1,104,811 ops/sec ±1.00% (89 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 594,875 ops/sec ±3.66% (71 runs sampled)
Using ? operator to avoid rejection x 661,896 ops/sec ±3.03% (76 runs sampled)
```
## private-property.js
```
Raw usage private field x 6,547,575 ops/sec ±1.25% (86 runs sampled)
Raw usage underscore usage x 5,348,256 ops/sec ±1.10% (81 runs sampled)
Manipulating private properties using # x 2,060,808 ops/sec ±1.03% (88 runs sampled)
Manipulating private properties using underscore(_) x 598,657,833 ops/sec ±0.94% (84 runs sampled)
Manipulating private properties using Symbol x 599,758,505 ops/sec ±0.80% (90 runs sampled)
Manipulating private properties using PrivateSymbol x 25,045,319 ops/sec ±2.06% (86 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,172 ops/sec ±21.43% (76 runs sampled)
streams.web.Readable reading 1e3 * some data x 326 ops/sec ±1.08% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,347 ops/sec ±1.05% (86 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 670 ops/sec ±16.94% (51 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
