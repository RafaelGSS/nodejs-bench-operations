## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,947|92|
|{...smallObject} - Total keys: 2|102,843,954|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,238|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,505|100|
|{ ...bigObject, ...anotherBigObject }|1,146|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,247,372|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|35,189,847|97|
|{ ...smallObject, ...anotherSmallObject }|23,709,580|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:12:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1947.0039974562274,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":102843953.88273686,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2238.250676221611,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6504.94567658573,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1145.6793780360272,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14247372.150956646,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":35189846.63721258,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23709580.2064692,"samples":6}]}-->
