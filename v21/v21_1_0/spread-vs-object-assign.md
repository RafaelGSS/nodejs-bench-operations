## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,257|93|
|{...smallObject} - Total keys: 2|125,858,462|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,336|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,904|99|
|{ ...bigObject, ...anotherBigObject }|1,398|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|16,357,380|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|40,571,611|94|
|{ ...smallObject, ...anotherSmallObject }|27,211,547|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 19:12:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2257.063212836993,"samples":8},{"name":"{...smallObject} - Total keys: 2","opsSec":125858461.8647761,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1335.54467783477,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6903.527598687537,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1398.406538648846,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":16357379.794480372,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":40571610.840234324,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":27211546.66569759,"samples":8}]}-->
