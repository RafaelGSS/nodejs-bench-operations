## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,965|94|
|{...smallObject} - Total keys: 2|97,018,298|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,191|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,454|98|
|{ ...bigObject, ...anotherBigObject }|1,175|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,967,766|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|34,638,059|97|
|{ ...smallObject, ...anotherSmallObject }|22,805,310|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:10:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1964.5073934953673,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":97018298.35663606,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2191.085003700011,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6453.965601575068,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1174.9624161587499,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13967766.11101359,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":34638058.834673665,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22805309.888568927,"samples":8}]}-->
