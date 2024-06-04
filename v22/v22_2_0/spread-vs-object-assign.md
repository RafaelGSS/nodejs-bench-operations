## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,251|1126|
|{...smallObject} - Total keys: 2|12,347,799|6173900|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,531|1267|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,783|3392|
|{ ...bigObject, ...anotherBigObject }|1,351|676|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,053,173|3526587|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,953,803|5476902|
|{ ...smallObject, ...anotherSmallObject }|8,894,237|4447119|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Tue Jun 04 2024 16:36:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245220184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2251.0551466148722,"samples":1126},{"name":"{...smallObject} - Total keys: 2","opsSec":12347799.407321183,"samples":6173900},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2531.844347213293,"samples":1267},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6783.423598929516,"samples":3392},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1351.9142588939128,"samples":676},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7053173.788410629,"samples":3526587},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10953803.474211676,"samples":5476902},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8894237.537476614,"samples":4447119}]}-->
