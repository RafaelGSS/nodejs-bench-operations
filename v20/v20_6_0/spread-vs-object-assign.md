## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,214|92|
|{...smallObject} - Total keys: 2|65,468,330|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,316|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,682|98|
|{ ...bigObject, ...anotherBigObject }|777|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,013,467|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,827,523|96|
|{ ...smallObject, ...anotherSmallObject }|14,610,041|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1214.4128822905031,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":65468330.47199574,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1316.0733376288406,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3682.209426789567,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":777.3009175744411,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8013466.807580279,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19827522.575620815,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14610041.308177538,"samples":5}]}-->
