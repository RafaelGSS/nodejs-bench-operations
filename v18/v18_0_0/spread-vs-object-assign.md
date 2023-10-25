## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,189|93|
|{...smallObject} - Total keys: 2|53,487,975|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,321|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,574|98|
|{ ...bigObject, ...anotherBigObject }|751|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,601,261|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,832,411|94|
|{ ...smallObject, ...anotherSmallObject }|11,384,434|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1188.6131542615838,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":53487975.210608415,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1320.5163802462264,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3573.5675112874255,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":751.1728937734348,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7601260.952532687,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":16832411.207639217,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":11384434.095536536,"samples":6}]}-->
