# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Thu Mar 17 2022 17:42:24 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,128,141 ops/sec ±0.35% (92 runs sampled)
Function returning explicitly undefined x 1,099,076 ops/sec ±0.58% (90 runs sampled)
Function returning implicitly undefined x 1,103,795 ops/sec ±0.98% (93 runs sampled)
Function returning string x 1,102,186 ops/sec ±0.66% (95 runs sampled)
Function returning integer x 1,135,146 ops/sec ±0.30% (93 runs sampled)
Function returning float x 1,137,739 ops/sec ±0.25% (93 runs sampled)
Function returning functions x 1,085,642 ops/sec ±0.40% (94 runs sampled)
Function returning arrow functions x 1,098,536 ops/sec ±0.49% (92 runs sampled)
Function returning empty object x 1,095,043 ops/sec ±0.87% (94 runs sampled)
Function returning empty array x 1,090,612 ops/sec ±0.70% (92 runs sampled)
```
## possible-undefined-function.js
```
```
## private-property.js
```
Raw usage private field x 6,625,993 ops/sec ±0.76% (90 runs sampled)
Raw usage underscore usage x 5,912,506 ops/sec ±0.34% (93 runs sampled)
Manipulating private properties using # x 2,012,417 ops/sec ±0.58% (88 runs sampled)
Manipulating private properties using underscore(_) x 29,293,794 ops/sec ±185.98% (78 runs sampled)
Manipulating private properties using Symbol x 567,261,738 ops/sec ±0.51% (96 runs sampled)
Manipulating private properties using PrivateSymbol x 20,896,337 ops/sec ±0.92% (92 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
