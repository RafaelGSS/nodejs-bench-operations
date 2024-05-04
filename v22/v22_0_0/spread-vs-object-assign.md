## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,235|93|
|{...smallObject} - Total keys: 2|68,998,616|87|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,273|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,924|96|
|{ ...bigObject, ...anotherBigObject }|1,375|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,592,347|93|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|32,440,152|94|
|{ ...smallObject, ...anotherSmallObject }|23,906,081|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:53:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2234.7197958543156,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":68998615.86676298,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1272.8204720039175,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6924.086692547205,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1374.6528912293004,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14592346.889102219,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":32440152.167070486,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23906081.02882122,"samples":4}]}-->
