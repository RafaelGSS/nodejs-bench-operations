## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,173|89|
|{...smallObject} - Total keys: 2|54,320,182|89|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,137|85|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,244|91|
|{ ...bigObject, ...anotherBigObject }|751|91|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|6,784,350|90|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|15,327,309|94|
|{ ...smallObject, ...anotherSmallObject }|9,840,031|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1172.711498439369,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":54320181.80201864,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1137.0445018726912,"samples":2},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3244.4830959731457,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":750.5228880834187,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":6784350.256868666,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":15327309.096785385,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":9840031.11165301,"samples":9}]}-->
