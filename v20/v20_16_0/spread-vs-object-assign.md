## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,819|910|
|{...smallObject} - Total keys: 2|14,466,066|7233034|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,221|1111|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,601|3301|
|{ ...bigObject, ...anotherBigObject }|1,131|566|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,627,868|3813935|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,975,649|5987825|
|{ ...smallObject, ...anotherSmallObject }|9,998,442|4999222|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:25:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1819.0793130254358,"samples":910},{"name":"{...smallObject} - Total keys: 2","opsSec":14466066.321888953,"samples":7233034},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2221.0854414164314,"samples":1111},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6601.428184292393,"samples":3301},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1131.16518425776,"samples":566},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7627868.825364192,"samples":3813935},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11975649.952214492,"samples":5987825},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9998442.540326342,"samples":4999222}]}-->
