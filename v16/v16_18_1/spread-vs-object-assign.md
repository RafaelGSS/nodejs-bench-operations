## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,407|95|
|{...smallObject} - Total keys: 2|66,070,827|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,562|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,593|97|
|{ ...bigObject, ...anotherBigObject }|841|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,328,097|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|23,721,069|97|
|{ ...smallObject, ...anotherSmallObject }|16,088,142|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1406.9196979946287,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":66070826.63284395,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1561.5480090610718,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4593.393839182266,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":840.8685665681868,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":9328097.498925066,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":23721068.74250074,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16088141.81303579,"samples":5}]}-->
