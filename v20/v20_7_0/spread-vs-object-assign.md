## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,055|88|
|{...smallObject} - Total keys: 2|53,534,960|87|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,141|85|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,136|89|
|{ ...bigObject, ...anotherBigObject }|670|84|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,655,798|89|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|21,887,446|88|
|{ ...smallObject, ...anotherSmallObject }|13,874,581|84|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:52:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1055.4795558868884,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":53534960.140993945,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1140.793178154641,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3136.138116735847,"samples":2},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":669.7542448323228,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8655797.630680146,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":21887446.161587518,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":13874580.951619232,"samples":5}]}-->
