## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,870|938|
|{...smallObject} - Total keys: 2|59,146,405|29596653|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,095|548|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,533|3267|
|{ ...bigObject, ...anotherBigObject }|1,167|584|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,678,430|6341033|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|29,165,903|14583249|
|{ ...smallObject, ...anotherSmallObject }|20,792,578|10396306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:25:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1870.321986737208,"samples":938},{"name":"{...smallObject} - Total keys: 2","opsSec":59146405.38467898,"samples":29596653},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1095.8327781097262,"samples":548},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6533.680529156846,"samples":3267},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1167.3835747771745,"samples":584},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12678430.637512721,"samples":6341033},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":29165903.307231568,"samples":14583249},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":20792578.731874026,"samples":10396306}]}-->
