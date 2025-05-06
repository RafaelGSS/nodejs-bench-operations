## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,702|853|
|{...smallObject} - Total keys: 2|39,295,053|19647829|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,044|523|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,797|3399|
|{ ...bigObject, ...anotherBigObject }|1,094|548|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,066,855|6033571|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,087,079|14051026|
|{ ...smallObject, ...anotherSmallObject }|20,174,018|10087400|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:49:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":853,"opsSec":1702.45734289551},{"name":"{...smallObject} - Total keys: 2","samples":19647829,"opsSec":39295053.956430584},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":523,"opsSec":1044.881389689691},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3399,"opsSec":6797.727914142509},{"name":"{ ...bigObject, ...anotherBigObject }","samples":548,"opsSec":1094.3570199188555},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6033571,"opsSec":12066855.170852588},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14051026,"opsSec":28087079.901187874},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10087400,"opsSec":20174018.337485496}]}-->
