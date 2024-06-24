## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,267|1135|
|{...smallObject} - Total keys: 2|12,345,071|6172536|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,534|1268|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,751|3376|
|{ ...bigObject, ...anotherBigObject }|1,339|670|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,084,268|3542135|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,125,334|5562668|
|{ ...smallObject, ...anotherSmallObject }|8,443,796|4221928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:13:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2267.4258367959983,"samples":1135},{"name":"{...smallObject} - Total keys: 2","opsSec":12345071.580256242,"samples":6172536},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2534.382840721829,"samples":1268},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6751.323247358276,"samples":3376},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1339.8651934831823,"samples":670},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7084268.044740764,"samples":3542135},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11125334.954203427,"samples":5562668},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8443796.150365558,"samples":4221928}]}-->
