# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v17.6.0`
* __Run:__ Wed Mar 09 2022 14:10:58 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,098,396 ops/sec ±0.99% (89 runs sampled)
Function returning explicitly undefined x 916,878 ops/sec ±0.93% (88 runs sampled)
Function returning implicitly undefined x 1,080,025 ops/sec ±0.80% (85 runs sampled)
Function returning string x 1,083,942 ops/sec ±1.11% (91 runs sampled)
Function returning integer x 1,085,225 ops/sec ±0.99% (90 runs sampled)
Function returning float x 1,095,690 ops/sec ±0.95% (89 runs sampled)
Function returning functions x 1,060,184 ops/sec ±0.65% (88 runs sampled)
Function returning arrow functions x 1,075,573 ops/sec ±1.12% (91 runs sampled)
Function returning empty object x 1,108,356 ops/sec ±0.70% (90 runs sampled)
Function returning empty array x 1,069,290 ops/sec ±1.01% (91 runs sampled)
```
## private-property.js
```
Raw usage private field x 6,811,955 ops/sec ±0.79% (91 runs sampled)
Raw usage underscore usage x 5,447,542 ops/sec ±0.94% (89 runs sampled)
Manipulating private properties using # x 2,059,259 ops/sec ±0.90% (91 runs sampled)
Manipulating private properties using underscore(_) x 595,421,545 ops/sec ±0.93% (90 runs sampled)
Manipulating private properties using Symbol x 594,284,630 ops/sec ±0.77% (89 runs sampled)
Manipulating private properties using PrivateSymbol x 24,175,097 ops/sec ±2.36% (85 runs sampled)
```
