## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,815|908|
|{...smallObject} - Total keys: 2|11,562,249|5781125|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,173|1087|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,213|3107|
|{ ...bigObject, ...anotherBigObject }|1,113|557|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,157,642|3078822|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,601,733|4800867|
|{ ...smallObject, ...anotherSmallObject }|7,978,672|3989337|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:22:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1815.0583877410998,"samples":908},{"name":"{...smallObject} - Total keys: 2","opsSec":11562249.658691635,"samples":5781125},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2173.75180549183,"samples":1087},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6213.57935246845,"samples":3107},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1113.7296153250284,"samples":557},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6157642.82939953,"samples":3078822},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9601733.79275299,"samples":4800867},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":7978672.195584,"samples":3989337}]}-->
