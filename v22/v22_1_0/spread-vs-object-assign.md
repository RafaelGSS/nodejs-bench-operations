## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,280|1141|
|{...smallObject} - Total keys: 2|12,194,636|6097319|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|2,519|1260|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,761|3381|
|{ ...bigObject, ...anotherBigObject }|1,371|686|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|7,208,725|3604363|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|10,739,263|5369632|
|{ ...smallObject, ...anotherSmallObject }|8,708,913|4354457|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:32:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","opsSec":2280.421601627581,"samples":1141},{"name":"{...smallObject} - Total keys: 2","opsSec":12194636.24395652,"samples":6097319},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","opsSec":2519.781570214725,"samples":1260},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","opsSec":6761.755508444098,"samples":3381},{"name":"{ ...bigObject, ...anotherBigObject }","opsSec":1371.5803211101388,"samples":686},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","opsSec":7208725.74048197,"samples":3604363},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","opsSec":10739263.054904524,"samples":5369632},{"name":"{ ...smallObject, ...anotherSmallObject }","opsSec":8708913.129108964,"samples":4354457}]}-->
