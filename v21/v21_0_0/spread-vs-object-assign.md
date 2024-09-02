## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,885|943|
|{...smallObject} - Total keys: 2|11,998,265|5999133|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,217|1109|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,767|3384|
|{ ...bigObject, ...anotherBigObject }|1,179|590|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,363,553|3181777|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,321,595|5160798|
|{ ...smallObject, ...anotherSmallObject }|9,020,046|4510024|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:26:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1885.0502965115113,"samples":943},{"name":"{...smallObject} - Total keys: 2","opsSec":11998265.268399157,"samples":5999133},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2217.0400970639366,"samples":1109},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6767.387456940408,"samples":3384},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1179.9751545133095,"samples":590},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6363553.892326959,"samples":3181777},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10321595.427696219,"samples":5160798},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9020046.973685151,"samples":4510024}]}-->
