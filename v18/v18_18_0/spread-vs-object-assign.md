## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,331|92|
|{...smallObject} - Total keys: 2|76,516,312|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,524|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,416|96|
|{ ...bigObject, ...anotherBigObject }|832|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,146,937|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,590,790|97|
|{ ...smallObject, ...anotherSmallObject }|16,586,220|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1330.6894617536154,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":76516312.05385968,"samples":8},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1524.1036210058185,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4415.918553494069,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":831.7064064782643,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":10146937.01332543,"samples":8},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":25590790.443093907,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16586220.102061722,"samples":7}]}-->
