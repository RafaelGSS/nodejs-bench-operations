# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v12.22.10`
* __Run:__ Thu Mar 17 2022 17:34:58 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,237,279 ops/sec ±0.70% (92 runs sampled)
Function returning explicitly undefined x 1,225,122 ops/sec ±0.59% (96 runs sampled)
Function returning implicitly undefined x 1,260,274 ops/sec ±0.82% (91 runs sampled)
Function returning string x 1,242,716 ops/sec ±0.64% (92 runs sampled)
Function returning integer x 1,214,720 ops/sec ±0.38% (97 runs sampled)
Function returning float x 1,113,448 ops/sec ±0.29% (94 runs sampled)
Function returning functions x 1,130,767 ops/sec ±1.26% (96 runs sampled)
Function returning arrow functions x 1,248,180 ops/sec ±0.48% (96 runs sampled)
Function returning empty object x 1,257,483 ops/sec ±0.78% (94 runs sampled)
Function returning empty array x 1,248,331 ops/sec ±0.45% (93 runs sampled)
```
## possible-undefined-function.js
```
```
## private-property.js
```
Raw usage private field x 8,659,483 ops/sec ±0.26% (97 runs sampled)
Raw usage underscore usage x 7,692,392 ops/sec ±0.52% (90 runs sampled)
Manipulating private properties using # x 2,628,284 ops/sec ±0.26% (93 runs sampled)
Manipulating private properties using underscore(_) x 470,100,871 ops/sec ±0.06% (96 runs sampled)
Manipulating private properties using Symbol x 468,769,875 ops/sec ±0.18% (96 runs sampled)
Manipulating private properties using PrivateSymbol x 31,494,579 ops/sec ±0.50% (96 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
