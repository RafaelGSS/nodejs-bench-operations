## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,292|90|
|{...smallObject} - Total keys: 2|56,739,351|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,304|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,489|98|
|{ ...bigObject, ...anotherBigObject }|794|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,947,936|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,022,764|95|
|{ ...smallObject, ...anotherSmallObject }|12,848,685|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1291.8572496679756,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":56739350.63764644,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1303.9348331807266,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3489.3475647192495,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":794.263172594846,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7947935.513104871,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19022763.765708536,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12848685.31670106,"samples":6}]}-->
