## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,104|94|
|{...smallObject} - Total keys: 2|111,541,051|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,204|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,216|98|
|{ ...bigObject, ...anotherBigObject }|1,297|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,754,293|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,719,816|99|
|{ ...smallObject, ...anotherSmallObject }|24,707,627|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sat Nov 04 2023 16:46:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606914520263672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2104.3180337040685,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":111541050.9283766,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2203.6858326915194,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6215.692284827441,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1296.6349985879967,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14754293.489213547,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36719816.04165986,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24707627.49853793,"samples":6}]}-->
