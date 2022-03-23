# Node.js Benchmark Operations

* __Machine:__ linux x64 | 2 vCPUs | 3.8GB Mem
* __Node:__ `v14.19.0`
* __Run:__ Wed Mar 23 2022 13:58:03 GMT+0000 (Coordinated Universal Time)

## compare-using-instanceof.js
```
[True conditional] Using instanceof only x 251,073 ops/sec ±1.11% (86 runs sampled)
[True conditional] Using constructor name x 247,187 ops/sec ±0.61% (83 runs sampled)
[True conditional] Check if property is valid then instanceof  x 251,345 ops/sec ±0.84% (87 runs sampled)
[False conditional] Using instanceof only x 975,639,683 ops/sec ±0.68% (89 runs sampled)
[False conditional] Using constructor name x 993,528,096 ops/sec ±0.73% (93 runs sampled)
[False conditional] Check if property is valid then instanceof  x 995,447,506 ops/sec ±0.57% (93 runs sampled)
```
## function-return.js
```
Function returning null x 916,987 ops/sec ±0.72% (93 runs sampled)
Function returning explicitly undefined x 943,554 ops/sec ±0.57% (92 runs sampled)
Function returning implicitly undefined x 915,933 ops/sec ±0.59% (91 runs sampled)
Function returning string x 899,056 ops/sec ±1.32% (91 runs sampled)
Function returning integer x 930,663 ops/sec ±0.64% (88 runs sampled)
Function returning float x 921,593 ops/sec ±0.58% (93 runs sampled)
Function returning functions x 900,590 ops/sec ±0.74% (90 runs sampled)
Function returning arrow functions x 915,853 ops/sec ±0.62% (89 runs sampled)
Function returning empty object x 923,209 ops/sec ±0.44% (94 runs sampled)
Function returning empty array x 936,846 ops/sec ±0.43% (93 runs sampled)
```
## possible-undefined-function.js
```
Using if to check function existence x 594,926 ops/sec ±2.18% (76 runs sampled)
Using ? operator to avoid rejection x 624,069 ops/sec ±1.92% (83 runs sampled)
```
## private-property.js
```
Raw usage private field x 7,659,099 ops/sec ±0.66% (88 runs sampled)
Raw usage underscore usage x 6,478,188 ops/sec ±0.58% (96 runs sampled)
Manipulating private properties using # x 2,395,507 ops/sec ±0.42% (95 runs sampled)
Manipulating private properties using underscore(_) x 980,512,446 ops/sec ±0.73% (91 runs sampled)
Manipulating private properties using Symbol x 992,934,856 ops/sec ±0.42% (94 runs sampled)
Manipulating private properties using PrivateSymbol x 23,484,889 ops/sec ±0.71% (90 runs sampled)
```
## stream-readable.js
```
```
## stream-writable.js
```
```
