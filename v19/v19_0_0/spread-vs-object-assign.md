## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,296|97|
|{...smallObject} - Total keys: 2|66,528,295|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,313|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,622|98|
|{ ...bigObject, ...anotherBigObject }|794|93|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,075,123|94|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|18,154,199|94|
|{ ...smallObject, ...anotherSmallObject }|12,056,445|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:45:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1296.3831975287892,"samples":3},{"name":"{...smallObject} - Total keys: 2","opsSec":66528294.70205284,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1313.447321586401,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3622.0693358393346,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":793.5865510497499,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8075122.776231784,"samples":6},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":18154198.613713074,"samples":7},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":12056445.157018755,"samples":6}]}-->
