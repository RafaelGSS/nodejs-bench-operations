## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,824|913|
|{...smallObject} - Total keys: 2|11,254,941|5627471|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,180|1091|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,622|3312|
|{ ...bigObject, ...anotherBigObject }|1,127|564|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,469,161|3234581|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,038,942|5019472|
|{ ...smallObject, ...anotherSmallObject }|8,232,910|4116457|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:24:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1824.684234828625,"samples":913},{"name":"{...smallObject} - Total keys: 2","opsSec":11254941.931405913,"samples":5627471},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2180.5792871011035,"samples":1091},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6622.328537675281,"samples":3312},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1127.0660927721867,"samples":564},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6469161.1853885865,"samples":3234581},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10038942.48945839,"samples":5019472},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8232910.215907129,"samples":4116457}]}-->
