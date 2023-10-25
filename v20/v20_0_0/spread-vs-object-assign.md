## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,027|84|
|{...smallObject} - Total keys: 2|51,723,731|85|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|673|86|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,205|86|
|{ ...bigObject, ...anotherBigObject }|692|86|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,673,856|88|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|22,365,653|86|
|{ ...smallObject, ...anotherSmallObject }|13,535,158|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1026.7027385926642,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":51723730.985953175,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":672.5393475400007,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3205.124806707541,"samples":2},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":692.3389337428945,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8673856.460220512,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":22365652.510697052,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":13535158.033359932,"samples":5}]}-->
