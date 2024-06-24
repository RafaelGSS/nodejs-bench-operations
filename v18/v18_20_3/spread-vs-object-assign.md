## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,174|1088|
|{...smallObject} - Total keys: 2|13,340,143|6670072|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,424|1213|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,564|3283|
|{ ...bigObject, ...anotherBigObject }|1,291|646|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,510,774|3255388|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,482,471|5241236|
|{ ...smallObject, ...anotherSmallObject }|9,254,342|4627172|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:09:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2174.8882972289566,"samples":1088},{"name":"{...smallObject} - Total keys: 2","opsSec":13340143.621565664,"samples":6670072},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2424.5798120337704,"samples":1213},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6564.703365035919,"samples":3283},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1291.1835976023137,"samples":646},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6510774.78506653,"samples":3255388},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10482471.167917313,"samples":5241236},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9254342.194572901,"samples":4627172}]}-->
