## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,043|1022|
|{...smallObject} - Total keys: 2|14,840,742|7420372|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,386|1194|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,439|3220|
|{ ...bigObject, ...anotherBigObject }|1,296|649|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,717,851|3358926|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,725,305|5862653|
|{ ...smallObject, ...anotherSmallObject }|10,280,287|5140144|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:08:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2043.1755622465714,"samples":1022},{"name":"{...smallObject} - Total keys: 2","opsSec":14840742.88300013,"samples":7420372},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2386.260339801804,"samples":1194},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6439.36983066778,"samples":3220},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1296.1152255057793,"samples":649},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6717851.4839399485,"samples":3358926},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11725305.923734425,"samples":5862653},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":10280287.392455522,"samples":5140144}]}-->
