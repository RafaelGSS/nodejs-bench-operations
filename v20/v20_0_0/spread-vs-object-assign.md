## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,248|1125|
|{...smallObject} - Total keys: 2|11,925,001|5962501|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,436|1219|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,490|3246|
|{ ...bigObject, ...anotherBigObject }|1,349|675|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,028,354|3514178|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,048,968|5524485|
|{ ...smallObject, ...anotherSmallObject }|9,038,796|4519399|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 23:40:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2248.6677550244676,"samples":1125},{"name":"{...smallObject} - Total keys: 2","opsSec":11925001.329018518,"samples":5962501},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2436.37484896679,"samples":1219},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6490.9456212265795,"samples":3246},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1349.5344919654476,"samples":675},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7028354.622582555,"samples":3514178},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11048968.403626716,"samples":5524485},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9038796.866461003,"samples":4519399}]}-->
