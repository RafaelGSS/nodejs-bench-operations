## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,894|1449|
|{...smallObject} - Total keys: 2|34,125,546|17063575|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,025|513|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,622|3312|
|{ ...bigObject, ...anotherBigObject }|1,379|692|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,813,953|5906980|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,208,437|13104228|
|{ ...smallObject, ...anotherSmallObject }|19,107,375|9563880|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:16:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1449,"opsSec":2894.6255439581223},{"name":"{...smallObject} - Total keys: 2","samples":17063575,"opsSec":34125546.167581216},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":513,"opsSec":1025.7391565839591},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3312,"opsSec":6622.939389240329},{"name":"{ ...bigObject, ...anotherBigObject }","samples":692,"opsSec":1379.3161870577985},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5906980,"opsSec":11813953.998511368},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13104228,"opsSec":26208437.863761},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9563880,"opsSec":19107375.98379722}]}-->
