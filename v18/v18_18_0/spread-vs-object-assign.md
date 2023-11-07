## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,033|95|
|{...smallObject} - Total keys: 2|108,710,192|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,121|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,231|98|
|{ ...bigObject, ...anotherBigObject }|1,133|90|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,062,150|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|36,090,006|99|
|{ ...smallObject, ...anotherSmallObject }|23,295,744|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:14:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2032.896502819037,"samples":7},{"name":"{...smallObject} - Total keys: 2","opsSec":108710192.01392207,"samples":10},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2121.3280735914,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6231.37277758998,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1132.643660395869,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14062150.484071841,"samples":8},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":36090006.15978888,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23295744.459362045,"samples":8}]}-->
