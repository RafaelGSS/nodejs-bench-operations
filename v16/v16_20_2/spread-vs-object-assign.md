## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,397|95|
|{...smallObject} - Total keys: 2|68,594,731|89|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,528|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|4,626|97|
|{ ...bigObject, ...anotherBigObject }|845|96|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|9,953,431|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|23,849,896|97|
|{ ...smallObject, ...anotherSmallObject }|16,151,008|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:40:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1397.4475760631224,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":68594730.51445718,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1527.5203175303216,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":4625.506779079143,"samples":5},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":844.7033196617141,"samples":2},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":9953430.736823985,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":23849896.44822884,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":16151008.11350585,"samples":6}]}-->
