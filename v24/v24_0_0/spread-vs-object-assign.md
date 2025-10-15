## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,061|1531|
|{...smallObject} - Total keys: 2|40,198,509|20100706|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,137|569|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,558|3280|
|{ ...bigObject, ...anotherBigObject }|1,541|771|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,065,788|6034304|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,666,511|13833260|
|{ ...smallObject, ...anotherSmallObject }|20,298,085|10149360|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:40:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1531,"opsSec":3061.929924671744},{"name":"{...smallObject} - Total keys: 2","samples":20100706,"opsSec":40198509.667602},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":569,"opsSec":1137.501062458978},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3280,"opsSec":6558.342195376537},{"name":"{ ...bigObject, ...anotherBigObject }","samples":771,"opsSec":1541.7559153705022},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6034304,"opsSec":12065788.514803017},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13833260,"opsSec":27666511.036050428},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10149360,"opsSec":20298085.92839177}]}-->
