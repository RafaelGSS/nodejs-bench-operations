## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,830|916|
|{...smallObject} - Total keys: 2|11,594,934|5797469|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,200|1101|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,745|3373|
|{ ...bigObject, ...anotherBigObject }|1,129|565|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,201,429|3100715|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,338,694|5169348|
|{ ...smallObject, ...anotherSmallObject }|8,829,834|4414918|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1830.765599026013,"samples":916},{"name":"{...smallObject} - Total keys: 2","opsSec":11594934.309375849,"samples":5797469},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2200.5164073167,"samples":1101},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6745.053803545074,"samples":3373},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1129.265304534885,"samples":565},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6201429.300421468,"samples":3100715},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10338694.506402325,"samples":5169348},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8829834.661226517,"samples":4414918}]}-->
