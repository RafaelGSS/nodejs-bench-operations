# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Wed Mar 09 2022 14:10:51 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,159,775 ops/sec ±0.95% (87 runs sampled)
Function returning explicitly undefined x 1,175,843 ops/sec ±0.43% (94 runs sampled)
Function returning implicitly undefined x 1,197,557 ops/sec ±0.71% (91 runs sampled)
Function returning string x 1,168,939 ops/sec ±0.75% (91 runs sampled)
Function returning integer x 1,220,908 ops/sec ±0.34% (90 runs sampled)
Function returning float x 1,181,845 ops/sec ±0.44% (94 runs sampled)
Function returning functions x 1,135,615 ops/sec ±0.79% (91 runs sampled)
Function returning arrow functions x 1,151,931 ops/sec ±0.56% (91 runs sampled)
Function returning empty object x 1,134,401 ops/sec ±0.49% (91 runs sampled)
Function returning empty array x 1,154,197 ops/sec ±0.82% (93 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,095,197 ops/sec ±0.74% (89 runs sampled)
Raw usage underscore usage x 5,895,144 ops/sec ±0.70% (86 runs sampled)
Manipulating private properties using # x 2,081,190 ops/sec ±0.71% (93 runs sampled)
Manipulating private properties using underscore(_) x 579,647,718 ops/sec ±0.47% (89 runs sampled)
Manipulating private properties using Symbol x 568,579,419 ops/sec ±0.43% (92 runs sampled)
Manipulating private properties using PrivateSymbol x 25,178,010 ops/sec ±0.50% (87 runs sampled)
```
