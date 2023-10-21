## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,009|80|
|{...smallObject} - Total keys: 2|51,414,248|84|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,089|86|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,003|84|
|{ ...bigObject, ...anotherBigObject }|623|85|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,617,833|86|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|22,710,515|84|
|{ ...smallObject, ...anotherSmallObject }|13,527,821|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1008.7960262958649,"samples":7},{"name":"{...smallObject} - Total keys: 2","opsSec":51414247.56573174,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1088.7926094858772,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3002.747079066531,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":623.4771265910987,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8617832.80234533,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":22710515.450174388,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":13527821.30641893,"samples":4}]}-->
