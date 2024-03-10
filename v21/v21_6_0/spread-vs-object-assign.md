## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,025|94|
|{...smallObject} - Total keys: 2|114,073,626|99|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,181|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,230|98|
|{ ...bigObject, ...anotherBigObject }|1,272|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,895,850|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,793,280|93|
|{ ...smallObject, ...anotherSmallObject }|24,729,765|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2025.15749006035,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":114073625.80552158,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2180.526648678572,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6230.04873696318,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1271.6081720689947,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14895849.978942387,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36793280.436171964,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24729765.03653396,"samples":6}]}-->
