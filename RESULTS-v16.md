# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Thu Mar 17 2022 19:27:34 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,363,745 ops/sec ±0.30% (95 runs sampled)
Function returning explicitly undefined x 1,339,229 ops/sec ±0.14% (96 runs sampled)
Function returning implicitly undefined x 1,373,019 ops/sec ±0.28% (97 runs sampled)
Function returning string x 1,368,341 ops/sec ±0.10% (95 runs sampled)
Function returning integer x 1,388,001 ops/sec ±0.31% (95 runs sampled)
Function returning float x 1,373,718 ops/sec ±0.10% (94 runs sampled)
Function returning functions x 1,354,104 ops/sec ±0.35% (98 runs sampled)
Function returning arrow functions x 1,364,172 ops/sec ±0.11% (94 runs sampled)
Function returning empty object x 1,368,085 ops/sec ±0.13% (94 runs sampled)
Function returning empty array x 1,359,286 ops/sec ±0.30% (95 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 744,875 ops/sec ±2.94% (71 runs sampled)
Using ? operator to avoid rejection x 808,962 ops/sec ±2.98% (76 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,954,343 ops/sec ±0.25% (95 runs sampled)
Raw usage underscore usage x 7,352,284 ops/sec ±0.17% (94 runs sampled)
Manipulating private properties using # x 2,689,381 ops/sec ±0.29% (97 runs sampled)
Manipulating private properties using underscore(_) x 701,261,265 ops/sec ±0.12% (95 runs sampled)
Manipulating private properties using Symbol x 700,745,418 ops/sec ±0.10% (97 runs sampled)
Manipulating private properties using PrivateSymbol x 26,759,593 ops/sec ±1.04% (88 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,701 ops/sec ±0.49% (88 runs sampled)
streams.web.Readable reading 1e3 * some data x 391 ops/sec ±4.36% (89 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,771 ops/sec ±0.50% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 966 ops/sec ±16.08% (52 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
