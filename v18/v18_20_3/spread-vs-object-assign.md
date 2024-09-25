## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,750|876|
|{...smallObject} - Total keys: 2|11,803,988|5901996|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,195|1098|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,222|3112|
|{ ...bigObject, ...anotherBigObject }|1,099|550|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|5,937,981|2968991|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|9,261,753|4630877|
|{ ...smallObject, ...anotherSmallObject }|7,755,181|3877591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:02:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1750.7760501598125,"samples":876},{"name":"{...smallObject} - Total keys: 2","opsSec":11803988.936073389,"samples":5901996},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2195.764319908022,"samples":1098},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6222.838209218825,"samples":3112},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1099.7376751859297,"samples":550},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":5937981.1753180465,"samples":2968991},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":9261753.561056389,"samples":4630877},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":7755181.564045332,"samples":3877591}]}-->
