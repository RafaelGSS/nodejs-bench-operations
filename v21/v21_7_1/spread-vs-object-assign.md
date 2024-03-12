## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,016|91|
|{...smallObject} - Total keys: 2|113,547,511|99|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,230|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,323|98|
|{ ...bigObject, ...anotherBigObject }|1,239|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,887,969|91|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,777,015|94|
|{ ...smallObject, ...anotherSmallObject }|24,676,600|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 19:21:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2015.9813350325223,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":113547510.56227526,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2229.9947755685093,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6322.528218527459,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1239.3869020432128,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14887968.996359902,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36777014.78315813,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24676600.306504667,"samples":5}]}-->
