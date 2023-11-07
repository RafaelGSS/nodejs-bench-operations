## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,017|96|
|{...smallObject} - Total keys: 2|108,047,596|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,153|94|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,553|99|
|{ ...bigObject, ...anotherBigObject }|1,229|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,983,961|98|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|38,200,768|98|
|{ ...smallObject, ...anotherSmallObject }|26,129,250|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:16:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2017.1424419097314,"samples":4},{"name":"{...smallObject} - Total keys: 2","opsSec":108047596.3360704,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1153.0909841172038,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6552.611687790284,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1229.410765219118,"samples":4},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14983960.935287554,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":38200768.25342203,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":26129249.791409366,"samples":7}]}-->
