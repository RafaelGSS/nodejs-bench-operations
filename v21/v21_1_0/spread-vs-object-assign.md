## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,104|96|
|{...smallObject} - Total keys: 2|116,756,777|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,258|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,653|97|
|{ ...bigObject, ...anotherBigObject }|1,265|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,122,150|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|39,856,836|98|
|{ ...smallObject, ...anotherSmallObject }|26,741,120|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:21:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2104.158422401554,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":116756777.12480967,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2257.521806770171,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6653.336293718903,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1265.0379493825171,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15122150.482076978,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":39856835.55001262,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":26741119.765730172,"samples":6}]}-->
