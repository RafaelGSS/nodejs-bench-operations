# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Thu Mar 17 2022 16:46:39 GMT+0000 (Coordinated Universal Time)

## function-return.js
```
Function returning null x 1,404,071 ops/sec ±0.27% (95 runs sampled)
Function returning explicitly undefined x 1,385,677 ops/sec ±0.13% (95 runs sampled)
Function returning implicitly undefined x 1,423,203 ops/sec ±0.37% (94 runs sampled)
Function returning string x 1,407,589 ops/sec ±0.25% (95 runs sampled)
Function returning integer x 1,414,587 ops/sec ±0.11% (95 runs sampled)
Function returning float x 1,414,694 ops/sec ±0.36% (94 runs sampled)
Function returning functions x 1,372,741 ops/sec ±0.12% (97 runs sampled)
Function returning arrow functions x 1,379,357 ops/sec ±0.13% (95 runs sampled)
Function returning empty object x 1,399,852 ops/sec ±0.47% (95 runs sampled)
Function returning empty array x 1,418,322 ops/sec ±0.13% (95 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 719,824 ops/sec ±3.02% (76 runs sampled)
Using ? operator to avoid rejection x 773,756 ops/sec ±2.93% (81 runs sampled)
```
## private-property.js
```
Raw usage private field x 8,662,545 ops/sec ±0.25% (93 runs sampled)
Raw usage underscore usage x 7,088,855 ops/sec ±0.22% (95 runs sampled)
Manipulating private properties using # x 2,549,723 ops/sec ±0.10% (94 runs sampled)
Manipulating private properties using underscore(_) x 701,978,502 ops/sec ±0.12% (95 runs sampled)
Manipulating private properties using Symbol x 700,486,020 ops/sec ±0.11% (96 runs sampled)
Manipulating private properties using PrivateSymbol x 30,444,296 ops/sec ±0.24% (96 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
