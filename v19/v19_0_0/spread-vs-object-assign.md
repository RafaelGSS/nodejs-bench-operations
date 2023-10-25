## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,394|87|
|{...smallObject} - Total keys: 2|71,438,649|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,413|89|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,894|91|
|{ ...bigObject, ...anotherBigObject }|836|86|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,546,921|85|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,225,356|90|
|{ ...smallObject, ...anotherSmallObject }|16,369,449|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1393.9247651887517,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":71438648.56345463,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1412.513753401434,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3893.927934830996,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":835.7395643681372,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":10546921.21864111,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27225355.57276729,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16369448.625441333,"samples":6}]}-->
