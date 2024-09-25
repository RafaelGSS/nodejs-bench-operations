## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,742|872|
|{...smallObject} - Total keys: 2|10,440,306|5220154|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,163|1082|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,528|3265|
|{ ...bigObject, ...anotherBigObject }|1,086|544|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,416,150|3208076|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,090,608|5045305|
|{ ...smallObject, ...anotherSmallObject }|8,083,533|4041767|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:09:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1742.9110257053578,"samples":872},{"name":"{...smallObject} - Total keys: 2","opsSec":10440306.413103614,"samples":5220154},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2163.5931622684807,"samples":1082},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6528.055044334565,"samples":3265},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1086.6271161829716,"samples":544},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6416150.216332232,"samples":3208076},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10090608.970742559,"samples":5045305},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8083533.6766268425,"samples":4041767}]}-->
