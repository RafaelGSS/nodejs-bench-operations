## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|4,102|2053|
|{...smallObject} - Total keys: 2|55,113,881|27583585|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,088|545|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,756|3379|
|{ ...bigObject, ...anotherBigObject }|1,535|768|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,084,408|6542209|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,543,494|13271784|
|{ ...smallObject, ...anotherSmallObject }|20,120,899|10060785|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:26:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":4102.923767258718,"samples":2053},{"name":"{...smallObject} - Total keys: 2","opsSec":55113881.04977954,"samples":27583585},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1088.3834241001841,"samples":545},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6756.771929674694,"samples":3379},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1535.6625135920378,"samples":768},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13084408.683901016,"samples":6542209},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":26543494.155999262,"samples":13271784},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20120899.12898124,"samples":10060785}]}-->
