## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,194|93|
|{...smallObject} - Total keys: 2|125,225,402|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,306|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,970|99|
|{ ...bigObject, ...anotherBigObject }|1,371|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|16,495,535|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|40,901,429|98|
|{ ...smallObject, ...anotherSmallObject }|27,218,115|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:52:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2193.746848556079,"samples":6},{"name":"{...smallObject} - Total keys: 2","opsSec":125225402.08037616,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1306.1452125841363,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6969.768236675816,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1371.138248521878,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":16495534.96232017,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":40901428.84060211,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":27218114.502992734,"samples":6}]}-->
