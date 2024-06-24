## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,162|1082|
|{...smallObject} - Total keys: 2|13,173,673|6586837|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,388|1195|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,764|3383|
|{ ...bigObject, ...anotherBigObject }|1,372|687|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,665,712|3332857|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,576,694|5288348|
|{ ...smallObject, ...anotherSmallObject }|9,608,266|4804134|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 01:12:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2162.333536988389,"samples":1082},{"name":"{...smallObject} - Total keys: 2","opsSec":13173673.78082766,"samples":6586837},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2388.7318842363943,"samples":1195},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6764.809014044365,"samples":3383},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1372.744452260117,"samples":687},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6665712.38534265,"samples":3332857},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10576694.183877897,"samples":5288348},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9608266.488437034,"samples":4804134}]}-->
