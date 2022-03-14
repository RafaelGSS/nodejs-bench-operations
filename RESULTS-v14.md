# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Mon Mar 14 2022 15:50:38 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,378,422 ops/sec ±2.11% (95 runs sampled)
Function returning explicitly undefined x 1,523,372 ops/sec ±1.30% (88 runs sampled)
Function returning implicitly undefined x 1,407,937 ops/sec ±0.34% (95 runs sampled)
Function returning string x 1,500,279 ops/sec ±1.36% (89 runs sampled)
Function returning integer x 1,613,398 ops/sec ±0.21% (97 runs sampled)
Function returning float x 1,605,594 ops/sec ±0.17% (96 runs sampled)
Function returning functions x 1,503,412 ops/sec ±1.36% (93 runs sampled)
Function returning arrow functions x 1,593,664 ops/sec ±0.10% (99 runs sampled)
Function returning empty object x 1,581,082 ops/sec ±0.52% (95 runs sampled)
Function returning empty array x 1,484,207 ops/sec ±1.21% (88 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,942,098 ops/sec ±1.01% (89 runs sampled)
Raw usage underscore usage x 7,311,981 ops/sec ±0.97% (89 runs sampled)
Manipulating private properties using # x 2,774,827 ops/sec ±1.26% (91 runs sampled)
Manipulating private properties using underscore(_) x 789,487,142 ops/sec ±0.76% (94 runs sampled)
Manipulating private properties using Symbol x 761,851,339 ops/sec ±1.32% (87 runs sampled)
Manipulating private properties using PrivateSymbol x 30,798,932 ops/sec ±1.21% (89 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
