## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,176|93|
|{...smallObject} - Total keys: 2|51,399,344|97|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,337|95|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,689|98|
|{ ...bigObject, ...anotherBigObject }|757|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,152,008|95|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,234,540|97|
|{ ...smallObject, ...anotherSmallObject }|12,275,395|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1176.2835912808152,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":51399344.0043578,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1336.8796763095975,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3689.4915147304073,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":757.4268855906447,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8152008.211484661,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18234540.25024413,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12275395.115754193,"samples":5}]}-->
