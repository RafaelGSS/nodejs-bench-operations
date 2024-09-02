## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,809|905|
|{...smallObject} - Total keys: 2|13,118,733|6559367|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,232|1117|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,480|3241|
|{ ...bigObject, ...anotherBigObject }|1,071|536|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,155,452|3077727|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,555,071|4777536|
|{ ...smallObject, ...anotherSmallObject }|8,004,253|4002127|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:24:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1809.5436295710615,"samples":905},{"name":"{...smallObject} - Total keys: 2","opsSec":13118733.157413548,"samples":6559367},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2232.9462905440228,"samples":1117},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6480.703937197675,"samples":3241},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1071.9661623624586,"samples":536},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6155452.904020073,"samples":3077727},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9555071.610194605,"samples":4777536},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8004253.3953471985,"samples":4002127}]}-->
