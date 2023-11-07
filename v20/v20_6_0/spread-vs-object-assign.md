## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,040|94|
|{...smallObject} - Total keys: 2|112,215,646|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,198|98|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,668|99|
|{ ...bigObject, ...anotherBigObject }|1,229|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,905,988|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|38,171,054|97|
|{ ...smallObject, ...anotherSmallObject }|26,257,834|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:18:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2040.4272035555791,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":112215645.90620282,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2198.2454450801315,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6668.026900907219,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1228.8422915991143,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15905987.62075466,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":38171053.86219077,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":26257834.31489321,"samples":6}]}-->
