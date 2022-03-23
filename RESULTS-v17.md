# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v17.7.1`
* __Run:__ Wed Mar 23 2022 14:00:31 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
[True conditional] Using instanceof only x 170,679 ops/sec ±5.07% (57 runs sampled)
[True conditional] Using constructor name x 137,090 ops/sec ±0.67% (94 runs sampled)
[True conditional] Check if property is valid then instanceof  x 138,787 ops/sec ±0.54% (91 runs sampled)
[False conditional] Using instanceof only x 1,017,435,828 ops/sec ±0.37% (92 runs sampled)
[False conditional] Using constructor name x 1,001,647,194 ops/sec ±0.60% (94 runs sampled)
[False conditional] Check if property is valid then instanceof  x 998,800,064 ops/sec ±0.78% (94 runs sampled)
```
## function-return.js
```
Function returning null x 887,066 ops/sec ±0.66% (90 runs sampled)
Function returning explicitly undefined x 883,729 ops/sec ±0.63% (91 runs sampled)
Function returning implicitly undefined x 892,540 ops/sec ±0.73% (95 runs sampled)
Function returning string x 887,840 ops/sec ±0.37% (90 runs sampled)
Function returning integer x 902,011 ops/sec ±0.46% (94 runs sampled)
Function returning float x 879,550 ops/sec ±0.54% (91 runs sampled)
Function returning functions x 869,179 ops/sec ±0.53% (93 runs sampled)
Function returning arrow functions x 865,679 ops/sec ±0.59% (93 runs sampled)
Function returning empty object x 870,974 ops/sec ±0.52% (92 runs sampled)
Function returning empty array x 873,811 ops/sec ±0.54% (91 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 572,162 ops/sec ±2.06% (77 runs sampled)
Using ? operator to avoid rejection x 583,455 ops/sec ±2.06% (82 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,950,990 ops/sec ±0.64% (89 runs sampled)
Raw usage underscore usage x 6,704,523 ops/sec ±0.60% (88 runs sampled)
Manipulating private properties using # x 2,437,294 ops/sec ±0.65% (91 runs sampled)
Manipulating private properties using underscore(_) x 980,664,925 ops/sec ±0.47% (94 runs sampled)
Manipulating private properties using Symbol x 973,421,962 ops/sec ±0.56% (90 runs sampled)
Manipulating private properties using PrivateSymbol x 22,645,195 ops/sec ±0.64% (94 runs sampled)
```
## stream-readable.js
```
streams.Readable reading 1e3 * some data x 1,270 ops/sec ±24.33% (84 runs sampled)
streams.web.Readable reading 1e3 * some data x 327 ops/sec ±0.79% (86 runs sampled)
Fastest is streams.Readable reading 1e3 * some data
```
## stream-writable.js
```
streams.Writable writing 1e3 * some data x 3,019 ops/sec ±0.98% (85 runs sampled)
streams.web.WritableStream writing 1e3 * some data x 550 ops/sec ±32.07% (30 runs sampled)
Fastest is streams.Writable writing 1e3 * some data
```
