## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,849|925|
|{...smallObject} - Total keys: 2|56,989,976|28500776|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,087|544|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,221|3111|
|{ ...bigObject, ...anotherBigObject }|1,136|569|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,242,934|6124943|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,046,211|14025608|
|{ ...smallObject, ...anotherSmallObject }|19,914,144|9957092|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:22:02 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1849.3685589966904,"samples":925},{"name":"{...smallObject} - Total keys: 2","opsSec":56989976.993732706,"samples":28500776},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1087.5097614746248,"samples":544},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6221.666095623979,"samples":3111},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1136.907082126695,"samples":569},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":12242934.192620877,"samples":6124943},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28046211.88269104,"samples":14025608},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":19914144.808963016,"samples":9957092}]}-->
