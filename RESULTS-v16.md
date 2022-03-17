# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Wed Mar 16 2022 18:52:09 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,345,073 ops/sec ±1.84% (96 runs sampled)
Function returning explicitly undefined x 1,340,631 ops/sec ±0.19% (94 runs sampled)
Function returning implicitly undefined x 1,378,001 ops/sec ±0.41% (91 runs sampled)
Function returning string x 1,354,635 ops/sec ±0.15% (95 runs sampled)
Function returning integer x 1,356,405 ops/sec ±0.51% (96 runs sampled)
Function returning float x 1,364,595 ops/sec ±0.21% (94 runs sampled)
Function returning functions x 1,325,640 ops/sec ±0.35% (98 runs sampled)
Function returning arrow functions x 1,343,688 ops/sec ±0.12% (96 runs sampled)
Function returning empty object x 1,355,981 ops/sec ±0.16% (93 runs sampled)
Function returning empty array x 1,316,465 ops/sec ±0.46% (93 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 768,747 ops/sec ±3.28% (76 runs sampled)
Using ? operator to avoid rejection x 831,085 ops/sec ±2.71% (80 runs sampled)
```
## private-property.js
```
Raw usage private field x 9,037,079 ops/sec ±0.15% (97 runs sampled)
Raw usage underscore usage x 7,385,684 ops/sec ±0.26% (95 runs sampled)
Manipulating private properties using # x 2,692,251 ops/sec ±0.44% (93 runs sampled)
Manipulating private properties using underscore(_) x 703,929,347 ops/sec ±0.11% (93 runs sampled)
Manipulating private properties using Symbol x 703,497,210 ops/sec ±0.10% (97 runs sampled)
Manipulating private properties using PrivateSymbol x 27,157,078 ops/sec ±1.07% (96 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,590 ops/sec ±18.93% (86 runs sampled)
streams.web.Readable reading 1e3 * some data x 397 ops/sec ±0.34% (87 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,737 ops/sec ±0.46% (95 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 734 ops/sec ±17.15% (59 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
