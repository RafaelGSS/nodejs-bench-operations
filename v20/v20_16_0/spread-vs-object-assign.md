## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,792|897|
|{...smallObject} - Total keys: 2|13,846,825|6923413|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,183|1092|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,524|3263|
|{ ...bigObject, ...anotherBigObject }|1,121|561|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,289,802|3644902|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|11,136,934|5568468|
|{ ...smallObject, ...anotherSmallObject }|9,211,541|4605771|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:06:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1792.3830589796094,"samples":897},{"name":"{...smallObject} - Total keys: 2","opsSec":13846825.335277,"samples":6923413},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2183.1751353049685,"samples":1092},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6524.101773444425,"samples":3263},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1121.1457542040619,"samples":561},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7289802.673251167,"samples":3644902},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":11136934.841762437,"samples":5568468},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9211541.815733513,"samples":4605771}]}-->
