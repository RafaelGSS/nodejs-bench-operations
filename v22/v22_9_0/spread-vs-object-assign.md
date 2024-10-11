## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,699|850|
|{...smallObject} - Total keys: 2|55,195,465|27598245|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,027|514|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,554|3278|
|{ ...bigObject, ...anotherBigObject }|1,078|540|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,618,800|6309516|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,351,755|14175881|
|{ ...smallObject, ...anotherSmallObject }|20,053,238|10029196|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:34:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1699.2220213928374,"samples":850},{"name":"{...smallObject} - Total keys: 2","opsSec":55195465.57215898,"samples":27598245},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1027.81267497311,"samples":514},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6554.830434715195,"samples":3278},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1078.1936547297107,"samples":540},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12618800.243114736,"samples":6309516},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28351755.025468268,"samples":14175881},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20053238.798906412,"samples":10029196}]}-->
