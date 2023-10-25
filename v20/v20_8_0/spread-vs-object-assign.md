## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,236|93|
|{...smallObject} - Total keys: 2|66,311,802|94|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,296|97|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|3,623|97|
|{ ...bigObject, ...anotherBigObject }|774|94|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|8,013,513|97|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|19,747,790|96|
|{ ...smallObject, ...anotherSmallObject }|14,421,967|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:51:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":1235.845880337325,"samples":2},{"name":"{...smallObject} - Total keys: 2","opsSec":66311802.4282125,"samples":6},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":1295.9969903124033,"samples":3},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":3623.129658995993,"samples":3},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":774.2764421139493,"samples":3},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":8013513.100709564,"samples":4},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":19747790.45053105,"samples":6},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":14421967.467749545,"samples":4}]}-->
