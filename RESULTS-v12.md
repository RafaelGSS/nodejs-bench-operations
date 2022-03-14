# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Mon Mar 14 2022 14:49:40 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,634,441 ops/sec ±0.30% (99 runs sampled)
Function returning explicitly undefined x 1,481,943 ops/sec ±1.20% (89 runs sampled)
Function returning implicitly undefined x 1,412,822 ops/sec ±0.40% (91 runs sampled)
Function returning string x 1,429,851 ops/sec ±0.47% (94 runs sampled)
Function returning integer x 1,445,261 ops/sec ±0.18% (97 runs sampled)
Function returning float x 1,405,295 ops/sec ±0.29% (97 runs sampled)
Function returning functions x 1,383,775 ops/sec ±0.10% (99 runs sampled)
Function returning arrow functions x 1,393,329 ops/sec ±0.18% (98 runs sampled)
Function returning empty object x 1,432,632 ops/sec ±0.37% (90 runs sampled)
Function returning empty array x 1,379,096 ops/sec ±0.23% (99 runs sampled)
```
## private-property.js
```
Raw usage private field x 9,116,568 ops/sec ±1.25% (89 runs sampled)
Raw usage underscore usage x 7,947,913 ops/sec ±1.00% (93 runs sampled)
Manipulating private properties using # x 2,512,484 ops/sec ±0.53% (84 runs sampled)
Manipulating private properties using underscore(_) x 699,168,604 ops/sec ±0.19% (98 runs sampled)
Manipulating private properties using Symbol x 707,938,579 ops/sec ±0.87% (95 runs sampled)
Manipulating private properties using PrivateSymbol x 28,089,299 ops/sec ±1.32% (89 runs sampled)
```
## stream-readable.js
```
```
