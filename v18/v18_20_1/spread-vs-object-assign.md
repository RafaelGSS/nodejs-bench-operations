## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,070|91|
|{...smallObject} - Total keys: 2|115,849,131|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,383|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,126|94|
|{ ...bigObject, ...anotherBigObject }|1,265|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,889,124|92|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,012,487|94|
|{ ...smallObject, ...anotherSmallObject }|25,267,583|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:45:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2069.7149065126896,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":115849130.73862375,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2383.104852268098,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6125.993746527885,"samples":4},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1265.0016251307616,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14889124.208295088,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37012486.699428454,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":25267582.711554714,"samples":5}]}-->
