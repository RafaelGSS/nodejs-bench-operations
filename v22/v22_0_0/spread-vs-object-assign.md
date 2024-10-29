## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,880|941|
|{...smallObject} - Total keys: 2|51,375,290|25694154|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,091|546|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,877|3439|
|{ ...bigObject, ...anotherBigObject }|1,158|580|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,404,550|6702959|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,976,061|13988034|
|{ ...smallObject, ...anotherSmallObject }|21,039,277|10520472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:25:29 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1880.8314243893756,"samples":941},{"name":"{...smallObject} - Total keys: 2","opsSec":51375290.73433489,"samples":25694154},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1091.4623281937345,"samples":546},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6877.831905788223,"samples":3439},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1158.9552157804364,"samples":580},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13404550.709018579,"samples":6702959},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":27976061.453601617,"samples":13988034},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21039277.899583135,"samples":10520472}]}-->
