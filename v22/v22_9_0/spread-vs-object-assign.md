## Object.assign VS spread operator


```
Platform: linux x64
CPU Cores: 4 vCPUs | 7.6GB Mem

{...bigObject} - Total keys: 1000             | ------------------------------ | 1,703 ops/sec
{...smallObject} - Total keys: 2              | ██████████████████████████████ | 38,741,844 ops/sec
Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object | ------------------------------ | 1,027 ops/sec
Object.assign(bigObject, anotherBigObject) - mutating bigObject | ------------------------------ | 6,810 ops/sec
{ ...bigObject, ...anotherBigObject }         | ------------------------------ | 1,085 ops/sec
Object.assign({}, smallObject, anotherSmallObject) - creating new object | ██████████-------------------- | 12,382,362 ops/sec
Object.assign(smallObject, anotherSmallObject) - mutating smallObject | ██████████████████████-------- | 28,322,837 ops/sec
{ ...smallObject, ...anotherSmallObject }     | ████████████████-------------- | 20,455,718 ops/sec
```
