## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,244|1123|
|{...smallObject} - Total keys: 2|15,461,436|7730719|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,479|1240|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,603|3302|
|{ ...bigObject, ...anotherBigObject }|1,339|670|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,772,139|3886070|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|13,014,452|6507227|
|{ ...smallObject, ...anotherSmallObject }|10,896,822|5448412|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:11:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2244.992070400127,"samples":1123},{"name":"{...smallObject} - Total keys: 2","opsSec":15461436.824944267,"samples":7730719},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2479.7842835650968,"samples":1240},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6603.114799636504,"samples":3302},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1339.6305245427861,"samples":670},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7772139.797913608,"samples":3886070},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":13014452.698572328,"samples":6507227},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":10896822.539752144,"samples":5448412}]}-->
