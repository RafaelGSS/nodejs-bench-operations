## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,814|97|
|{...smallObject} - Total keys: 2|103,957,609|92|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,095|96|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,557|99|
|{ ...bigObject, ...anotherBigObject }|1,137|97|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|15,285,089|99|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|37,978,143|97|
|{ ...smallObject, ...anotherSmallObject }|25,407,507|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 10:53:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1813.8256886083245,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":103957609.1396368,"samples":5},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1094.8461829931962,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6557.463981494606,"samples":6},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1137.480995928708,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":15285089.250447124,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":37978143.013459995,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":25407507.106255464,"samples":7}]}-->
