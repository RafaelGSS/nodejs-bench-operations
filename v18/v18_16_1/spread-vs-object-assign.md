## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,988|93|
|{...smallObject} - Total keys: 2|108,440,068|95|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,182|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,133|98|
|{ ...bigObject, ...anotherBigObject }|1,106|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,159,863|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|33,709,544|94|
|{ ...smallObject, ...anotherSmallObject }|23,237,689|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 23:13:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1988.4163831812625,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":108440067.6829108,"samples":8},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2181.808041984264,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6132.617495643458,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1105.5426694738223,"samples":5},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14159862.97877256,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":33709543.590870135,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":23237689.35998154,"samples":6}]}-->
