## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,879|86|
|{...smallObject} - Total keys: 2|98,990,084|93|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,217|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,259|100|
|{ ...bigObject, ...anotherBigObject }|1,166|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,931,299|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,411,772|96|
|{ ...smallObject, ...anotherSmallObject }|23,649,018|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:40:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1878.897937709861,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":98990084.36820747,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2216.62132967653,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6259.167066006461,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1166.2368508548536,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13931298.958567893,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":33411772.322400086,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23649017.936950237,"samples":6}]}-->
