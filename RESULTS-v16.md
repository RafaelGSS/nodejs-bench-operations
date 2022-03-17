# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v16.14.0`
* __Run:__ Thu Mar 17 2022 16:46:38 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,174,024 ops/sec ±0.42% (92 runs sampled)
Function returning explicitly undefined x 1,180,878 ops/sec ±0.28% (90 runs sampled)
Function returning implicitly undefined x 1,205,478 ops/sec ±0.53% (91 runs sampled)
Function returning string x 1,203,538 ops/sec ±0.38% (95 runs sampled)
Function returning integer x 1,192,744 ops/sec ±0.55% (93 runs sampled)
Function returning float x 1,172,833 ops/sec ±0.35% (94 runs sampled)
Function returning functions x 1,172,637 ops/sec ±0.42% (90 runs sampled)
Function returning arrow functions x 1,168,059 ops/sec ±0.46% (94 runs sampled)
Function returning empty object x 1,197,849 ops/sec ±0.39% (92 runs sampled)
Function returning empty array x 1,175,201 ops/sec ±0.38% (93 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 683,213 ops/sec ±3.44% (75 runs sampled)
Using ? operator to avoid rejection x 735,520 ops/sec ±2.87% (77 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,829,326 ops/sec ±0.35% (88 runs sampled)
Raw usage underscore usage x 6,488,791 ops/sec ±0.58% (94 runs sampled)
Manipulating private properties using # x 2,367,816 ops/sec ±0.52% (93 runs sampled)
Manipulating private properties using underscore(_) x 607,692,484 ops/sec ±0.56% (90 runs sampled)
Manipulating private properties using Symbol x 609,888,352 ops/sec ±0.40% (94 runs sampled)
Manipulating private properties using PrivateSymbol x 23,888,177 ops/sec ±1.13% (91 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,452 ops/sec ±17.54% (85 runs sampled)
streams.web.Readable reading 1e3 * some data x 345 ops/sec ±0.50% (84 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 2,359 ops/sec ±0.40% (92 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 719 ops/sec ±17.93% (39 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
