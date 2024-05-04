## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,174|94|
|{...smallObject} - Total keys: 2|70,555,815|88|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,278|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,736|97|
|{ ...bigObject, ...anotherBigObject }|1,334|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,363,848|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|32,567,173|92|
|{ ...smallObject, ...anotherSmallObject }|24,292,122|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:54:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2173.594518803309,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":70555815.4866816,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1277.8986804952256,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6736.185078092741,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1334.202759776481,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14363848.439127948,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":32567172.595302317,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24292121.884945642,"samples":5}]}-->
