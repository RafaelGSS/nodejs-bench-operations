## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,376|93|
|{...smallObject} - Total keys: 2|77,381,261|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,544|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,417|96|
|{ ...bigObject, ...anotherBigObject }|823|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,907,305|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,475,793|96|
|{ ...smallObject, ...anotherSmallObject }|16,645,551|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1375.5530281005695,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":77381261.47790544,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1543.5798911340098,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4416.785443785907,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":822.5846561499374,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":9907304.576156678,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":25475793.447601903,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16645550.518209985,"samples":6}]}-->
