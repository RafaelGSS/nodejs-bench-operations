## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,840|921|
|{...smallObject} - Total keys: 2|13,198,462|6599232|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,201|1101|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,759|3380|
|{ ...bigObject, ...anotherBigObject }|1,152|577|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,281,993|3640997|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,975,829|5487915|
|{ ...smallObject, ...anotherSmallObject }|9,785,466|4892734|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:27:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1840.7474744254625,"samples":921},{"name":"{...smallObject} - Total keys: 2","opsSec":13198462.601007625,"samples":6599232},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2201.9585899669974,"samples":1101},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6759.755121110071,"samples":3380},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1152.1489643867635,"samples":577},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7281993.140719592,"samples":3640997},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10975829.517093126,"samples":5487915},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9785466.982352028,"samples":4892734}]}-->
