# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Mon Mar 14 2022 15:50:39 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,237,788 ops/sec ±0.87% (89 runs sampled)
Function returning explicitly undefined x 1,193,216 ops/sec ±1.00% (86 runs sampled)
Function returning implicitly undefined x 1,204,073 ops/sec ±0.56% (90 runs sampled)
Function returning string x 1,163,469 ops/sec ±0.62% (85 runs sampled)
Function returning integer x 1,164,286 ops/sec ±0.55% (90 runs sampled)
Function returning float x 1,174,504 ops/sec ±0.28% (90 runs sampled)
Function returning functions x 1,131,196 ops/sec ±1.14% (92 runs sampled)
Function returning arrow functions x 1,171,163 ops/sec ±0.55% (88 runs sampled)
Function returning empty object x 1,193,538 ops/sec ±0.50% (92 runs sampled)
Function returning empty array x 1,197,011 ops/sec ±0.53% (91 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,309,262 ops/sec ±0.77% (91 runs sampled)
Raw usage underscore usage x 6,195,499 ops/sec ±0.65% (89 runs sampled)
Manipulating private properties using # x 2,228,770 ops/sec ±0.54% (92 runs sampled)
Manipulating private properties using underscore(_) x 581,831,968 ops/sec ±0.16% (95 runs sampled)
Manipulating private properties using Symbol x 579,171,602 ops/sec ±0.17% (95 runs sampled)
Manipulating private properties using PrivateSymbol x 22,223,583 ops/sec ±1.40% (89 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,354 ops/sec ±17.18% (83 runs sampled)
streams.web.Readable reading 1e3 * some data x 326 ops/sec ±0.67% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,346 ops/sec ±0.78% (86 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 707 ops/sec ±15.51% (62 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
