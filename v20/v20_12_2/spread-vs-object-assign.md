## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,239|94|
|{...smallObject} - Total keys: 2|113,667,324|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,509|99|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,721|98|
|{ ...bigObject, ...anotherBigObject }|1,359|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,169,985|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|41,376,579|97|
|{ ...smallObject, ...anotherSmallObject }|27,512,785|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:49:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2239.267772176461,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":113667324.13544653,"samples":4},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2508.893822084856,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6721.418335907608,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1358.5592507685656,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15169985.042150376,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":41376578.81048538,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":27512785.197160434,"samples":6}]}-->
