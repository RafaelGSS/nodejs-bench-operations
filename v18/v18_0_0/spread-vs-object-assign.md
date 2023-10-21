## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,393|90|
|{...smallObject} - Total keys: 2|74,505,589|98|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,595|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,650|97|
|{ ...bigObject, ...anotherBigObject }|828|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,812,475|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|24,969,874|97|
|{ ...smallObject, ...anotherSmallObject }|16,944,572|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1392.800580997692,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":74505588.56276776,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1595.0380721579318,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4650.2850387790795,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":828.1553450974739,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":9812475.29230169,"samples":7},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":24969873.672278747,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16944572.440988865,"samples":5}]}-->
