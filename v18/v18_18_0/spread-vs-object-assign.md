## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,899|93|
|{...smallObject} - Total keys: 2|102,353,762|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,192|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,893|96|
|{ ...bigObject, ...anotherBigObject }|1,180|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,926,914|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,426,001|98|
|{ ...smallObject, ...anotherSmallObject }|22,533,357|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1898.512860695621,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":102353761.88223565,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2192.120794995764,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":5893.344876904025,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1180.0617218815084,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12926913.797756204,"samples":8},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":33426000.517998293,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":22533356.97810731,"samples":5}]}-->
