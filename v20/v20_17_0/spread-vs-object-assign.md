## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,645|823|
|{...smallObject} - Total keys: 2|47,790,559|23896126|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,030|516|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,425|3213|
|{ ...bigObject, ...anotherBigObject }|1,084|543|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,991,970|6496314|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,354,501|13177407|
|{ ...smallObject, ...anotherSmallObject }|19,085,579|9544579|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:34:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1645.4618582810965,"samples":823},{"name":"{...smallObject} - Total keys: 2","opsSec":47790559.16281333,"samples":23896126},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1030.0363017131072,"samples":516},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6425.368399137102,"samples":3213},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1084.555794658275,"samples":543},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12991970.372443689,"samples":6496314},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":26354501.066654336,"samples":13177407},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19085579.835492443,"samples":9544579}]}-->
