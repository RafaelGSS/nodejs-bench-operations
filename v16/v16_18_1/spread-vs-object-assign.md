## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,286|96|
|{...smallObject} - Total keys: 2|57,208,327|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,318|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,514|97|
|{ ...bigObject, ...anotherBigObject }|788|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,902,019|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,110,802|95|
|{ ...smallObject, ...anotherSmallObject }|12,537,050|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1285.5526522506323,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":57208327.48567783,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1318.1282264286135,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3513.7314365909106,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":787.7705803406909,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7902019.343075912,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19110802.097397458,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12537049.58716712,"samples":6}]}-->
