## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,090|93|
|{...smallObject} - Total keys: 2|92,863,911|96|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,428|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,452|98|
|{ ...bigObject, ...anotherBigObject }|1,294|95|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|14,129,380|96|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|35,270,787|98|
|{ ...smallObject, ...anotherSmallObject }|24,793,331|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sat May 04 2024 00:44:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2089.962971101955,"samples":5},{"name":"{...smallObject} - Total keys: 2","opsSec":92863911.05858414,"samples":7},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2428.0475353800025,"samples":4},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6452.154877139863,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1293.934311700417,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":14129379.692364221,"samples":5},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":35270787.34256891,"samples":5},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":24793330.90217843,"samples":7}]}-->
