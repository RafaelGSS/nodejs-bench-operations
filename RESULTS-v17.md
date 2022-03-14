# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.7.1`
* __Run:__ Mon Mar 14 2022 14:49:46 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,137,679 ops/sec ±0.99% (88 runs sampled)
Function returning explicitly undefined x 1,078,316 ops/sec ±1.17% (89 runs sampled)
Function returning implicitly undefined x 1,160,123 ops/sec ±0.99% (87 runs sampled)
Function returning string x 1,108,079 ops/sec ±0.91% (87 runs sampled)
Function returning integer x 1,066,419 ops/sec ±1.02% (85 runs sampled)
Function returning float x 1,090,560 ops/sec ±1.12% (85 runs sampled)
Function returning functions x 1,075,200 ops/sec ±0.69% (89 runs sampled)
Function returning arrow functions x 1,097,564 ops/sec ±1.07% (85 runs sampled)
Function returning empty object x 1,113,114 ops/sec ±1.21% (86 runs sampled)
Function returning empty array x 1,110,868 ops/sec ±0.60% (92 runs sampled)
```
## private-property.js
```
Raw usage private field x 6,903,956 ops/sec ±0.63% (91 runs sampled)
Raw usage underscore usage x 5,470,040 ops/sec ±1.00% (89 runs sampled)
Manipulating private properties using # x 2,082,440 ops/sec ±0.93% (92 runs sampled)
Manipulating private properties using underscore(_) x 594,954,835 ops/sec ±0.87% (88 runs sampled)
Manipulating private properties using Symbol x 603,805,384 ops/sec ±0.63% (88 runs sampled)
Manipulating private properties using PrivateSymbol x 25,028,718 ops/sec ±1.88% (87 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,187 ops/sec ±19.93% (79 runs sampled)
streams.web.Readable reading 1e3 * some data x 339 ops/sec ±1.10% (83 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
