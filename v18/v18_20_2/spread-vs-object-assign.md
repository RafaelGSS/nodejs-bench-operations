## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,178|1090|
|{...smallObject} - Total keys: 2|13,482,830|6741416|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,447|1224|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,496|3249|
|{ ...bigObject, ...anotherBigObject }|1,311|656|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,520,643|3260322|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,885,146|5442574|
|{ ...smallObject, ...anotherSmallObject }|9,194,931|4597466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:09:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2178.472729392507,"samples":1090},{"name":"{...smallObject} - Total keys: 2","opsSec":13482830.838138422,"samples":6741416},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2447.192710070052,"samples":1224},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6496.57090949159,"samples":3249},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1311.776672618227,"samples":656},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6520643.002988371,"samples":3260322},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10885146.795330744,"samples":5442574},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9194931.382472698,"samples":4597466}]}-->
