# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.7.1`
* __Run:__ Thu Mar 17 2022 19:27:37 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,389,166 ops/sec ±0.49% (99 runs sampled)
Function returning explicitly undefined x 1,381,880 ops/sec ±0.23% (99 runs sampled)
Function returning implicitly undefined x 1,338,863 ops/sec ±0.41% (98 runs sampled)
Function returning string x 1,382,147 ops/sec ±0.18% (96 runs sampled)
Function returning integer x 1,348,157 ops/sec ±0.83% (97 runs sampled)
Function returning float x 1,362,732 ops/sec ±0.22% (98 runs sampled)
Function returning functions x 1,370,680 ops/sec ±0.81% (98 runs sampled)
Function returning arrow functions x 1,330,491 ops/sec ±0.20% (96 runs sampled)
Function returning empty object x 1,414,340 ops/sec ±0.20% (93 runs sampled)
Function returning empty array x 1,407,852 ops/sec ±0.58% (99 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 765,552 ops/sec ±3.11% (76 runs sampled)
Using ? operator to avoid rejection x 838,274 ops/sec ±2.58% (81 runs sampled)
```
## private-property.js
```
Raw usage private field x 9,081,207 ops/sec ±0.21% (97 runs sampled)
Raw usage underscore usage x 7,614,699 ops/sec ±0.22% (98 runs sampled)
Manipulating private properties using # x 2,741,244 ops/sec ±0.30% (98 runs sampled)
Manipulating private properties using underscore(_) x 706,855,604 ops/sec ±0.10% (98 runs sampled)
Manipulating private properties using Symbol x 704,308,263 ops/sec ±0.16% (90 runs sampled)
Manipulating private properties using PrivateSymbol x 29,596,834 ops/sec ±0.72% (93 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,760 ops/sec ±0.58% (87 runs sampled)
streams.web.Readable reading 1e3 * some data x 422 ops/sec ±0.26% (88 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 3,025 ops/sec ±0.41% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 934 ops/sec ±15.37% (56 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
