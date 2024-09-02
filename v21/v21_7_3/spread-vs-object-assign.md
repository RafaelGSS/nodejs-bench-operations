## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,843|923|
|{...smallObject} - Total keys: 2|11,283,250|5641626|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,257|1129|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,693|3347|
|{ ...bigObject, ...anotherBigObject }|1,147|574|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,430,271|3215136|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,305,805|5152904|
|{ ...smallObject, ...anotherSmallObject }|8,536,212|4268107|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 18:28:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1843.5109910095248,"samples":923},{"name":"{...smallObject} - Total keys: 2","opsSec":11283250.307497555,"samples":5641626},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2257.8564635491643,"samples":1129},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6693.818169124672,"samples":3347},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1147.8899908148232,"samples":574},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6430271.228383192,"samples":3215136},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10305805.50603539,"samples":5152904},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8536212.907476671,"samples":4268107}]}-->
