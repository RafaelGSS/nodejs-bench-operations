## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,846|924|
|{...smallObject} - Total keys: 2|60,099,156|30049597|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,113|557|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,645|3323|
|{ ...bigObject, ...anotherBigObject }|1,170|586|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,576,607|6789163|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,381,137|14190575|
|{ ...smallObject, ...anotherSmallObject }|21,478,887|10739764|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:25:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1846.9780005810703,"samples":924},{"name":"{...smallObject} - Total keys: 2","opsSec":60099156.858721055,"samples":30049597},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1113.0040061050568,"samples":557},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6645.210455964886,"samples":3323},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1170.3692285835377,"samples":586},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13576607.201528287,"samples":6789163},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":28381137.68258625,"samples":14190575},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":21478887.886183217,"samples":10739764}]}-->
