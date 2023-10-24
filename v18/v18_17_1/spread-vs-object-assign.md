## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,239|92|
|{...smallObject} - Total keys: 2|57,338,804|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,302|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,579|97|
|{ ...bigObject, ...anotherBigObject }|775|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,517,212|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|16,676,114|94|
|{ ...smallObject, ...anotherSmallObject }|10,680,426|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1239.1513297988865,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":57338804.04249369,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1302.3793863937856,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3578.724957451628,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":775.2014467394923,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7517212.227391942,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":16676113.951445565,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":10680426.476305893,"samples":5}]}-->
