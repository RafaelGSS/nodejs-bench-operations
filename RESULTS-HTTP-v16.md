# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Thu Mar 17 2022 17:35:01 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,370,974 ops/sec ±0.68% (94 runs sampled)
Function returning explicitly undefined x 1,369,827 ops/sec ±0.17% (95 runs sampled)
Function returning implicitly undefined x 1,381,871 ops/sec ±0.45% (91 runs sampled)
Function returning string x 1,351,256 ops/sec ±0.13% (96 runs sampled)
Function returning integer x 1,372,395 ops/sec ±0.41% (94 runs sampled)
Function returning float x 1,377,713 ops/sec ±0.21% (98 runs sampled)
Function returning functions x 1,349,756 ops/sec ±0.41% (97 runs sampled)
Function returning arrow functions x 1,359,217 ops/sec ±0.16% (95 runs sampled)
Function returning empty object x 1,381,480 ops/sec ±0.13% (96 runs sampled)
Function returning empty array x 1,351,201 ops/sec ±0.46% (94 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 698,546 ops/sec ±4.03% (69 runs sampled)
Using ? operator to avoid rejection x 784,680 ops/sec ±3.17% (76 runs sampled)
```
## private-property.js
```
Raw usage private field x 9,026,857 ops/sec ±0.24% (96 runs sampled)
Raw usage underscore usage x 7,334,555 ops/sec ±0.28% (94 runs sampled)
Manipulating private properties using # x 2,675,507 ops/sec ±0.44% (96 runs sampled)
Manipulating private properties using underscore(_) x 703,670,677 ops/sec ±0.11% (92 runs sampled)
Manipulating private properties using Symbol x 702,042,992 ops/sec ±0.11% (95 runs sampled)
Manipulating private properties using PrivateSymbol x 26,602,759 ops/sec ±1.34% (94 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,663 ops/sec ±0.81% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 388 ops/sec ±4.25% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,746 ops/sec ±0.54% (93 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 874 ops/sec ±15.94% (53 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
