# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Mon Mar 14 2022 15:50:46 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,401,731 ops/sec ±0.31% (97 runs sampled)
Function returning explicitly undefined x 1,395,597 ops/sec ±0.11% (97 runs sampled)
Function returning implicitly undefined x 1,411,323 ops/sec ±0.34% (95 runs sampled)
Function returning string x 1,415,844 ops/sec ±0.42% (90 runs sampled)
Function returning integer x 1,602,954 ops/sec ±0.72% (93 runs sampled)
Function returning float x 1,553,085 ops/sec ±1.18% (92 runs sampled)
Function returning functions x 1,379,260 ops/sec ±0.11% (98 runs sampled)
Function returning arrow functions x 1,401,852 ops/sec ±0.14% (95 runs sampled)
Function returning empty object x 1,412,750 ops/sec ±0.35% (95 runs sampled)
Function returning empty array x 1,424,581 ops/sec ±0.12% (95 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,300,940 ops/sec ±0.61% (87 runs sampled)
Raw usage underscore usage x 7,923,890 ops/sec ±1.13% (89 runs sampled)
Manipulating private properties using # x 2,533,044 ops/sec ±0.67% (88 runs sampled)
Manipulating private properties using underscore(_) x 702,943,790 ops/sec ±0.51% (85 runs sampled)
Manipulating private properties using Symbol x 702,398,874 ops/sec ±0.34% (88 runs sampled)
Manipulating private properties using PrivateSymbol x 25,781,398 ops/sec ±0.12% (96 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
