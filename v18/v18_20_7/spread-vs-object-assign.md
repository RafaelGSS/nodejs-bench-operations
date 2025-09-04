## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,657|829|
|{...smallObject} - Total keys: 2|38,049,691|19045397|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,021|511|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,076|3039|
|{ ...bigObject, ...anotherBigObject }|1,078|540|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,483,158|5741581|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,240,259|13120971|
|{ ...smallObject, ...anotherSmallObject }|18,497,683|9249199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:19:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":829,"opsSec":1657.4518939182965},{"name":"{...smallObject} - Total keys: 2","samples":19045397,"opsSec":38049691.42962821},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":511,"opsSec":1021.2049143625951},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3039,"opsSec":6076.560086168861},{"name":"{ ...bigObject, ...anotherBigObject }","samples":540,"opsSec":1078.1360041935336},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5741581,"opsSec":11483158.279456718},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13120971,"opsSec":26240259.159699567},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9249199,"opsSec":18497683.91541013}]}-->
