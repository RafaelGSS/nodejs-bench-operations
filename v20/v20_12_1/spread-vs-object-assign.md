## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,221|95|
|{...smallObject} - Total keys: 2|113,935,667|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,313|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,870|98|
|{ ...bigObject, ...anotherBigObject }|1,357|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,036,510|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|41,321,476|97|
|{ ...smallObject, ...anotherSmallObject }|27,396,530|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:48:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2221.088485206937,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":113935667.11819702,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1313.4604802448525,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6870.387330555989,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1357.4735037013336,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15036509.908074332,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":41321476.166449405,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":27396529.820565604,"samples":7}]}-->
