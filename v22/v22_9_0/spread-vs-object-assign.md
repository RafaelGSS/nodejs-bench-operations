## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,736|869|
|{...smallObject} - Total keys: 2|56,333,310|28168767|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,054|528|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,623|3312|
|{ ...bigObject, ...anotherBigObject }|1,107|554|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,894,890|6449053|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,193,677|14097484|
|{ ...smallObject, ...anotherSmallObject }|20,186,948|10093553|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:42:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1736.9599813155075,"samples":869},{"name":"{...smallObject} - Total keys: 2","opsSec":56333310.9170138,"samples":28168767},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1054.3534583781893,"samples":528},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6623.430067089587,"samples":3312},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1107.703244085503,"samples":554},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12894890.298047254,"samples":6449053},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28193677.237068735,"samples":14097484},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20186948.339933462,"samples":10093553}]}-->
