## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,191|88|
|{...smallObject} - Total keys: 2|105,080,144|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,264|92|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,085|94|
|{ ...bigObject, ...anotherBigObject }|1,316|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|13,931,070|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,471,486|94|
|{ ...smallObject, ...anotherSmallObject }|25,081,598|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 16:18:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2191.297394669498,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":105080144.48824868,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1263.7258298696117,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6084.579081440129,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1315.5348572676419,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":13931070.463881228,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37471485.7899704,"samples":4},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":25081597.68965937,"samples":7}]}-->
