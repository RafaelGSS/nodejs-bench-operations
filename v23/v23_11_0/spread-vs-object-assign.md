## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,986|1494|
|{...smallObject} - Total keys: 2|37,675,684|18838107|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,053|528|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,697|3349|
|{ ...bigObject, ...anotherBigObject }|1,399|700|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,823,095|5914351|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,621,612|13313147|
|{ ...smallObject, ...anotherSmallObject }|19,384,268|9695548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:52:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1494,"opsSec":2986.6423739226557},{"name":"{...smallObject} - Total keys: 2","samples":18838107,"opsSec":37675684.35522933},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":528,"opsSec":1053.2186601622436},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3349,"opsSec":6697.854174318917},{"name":"{ ...bigObject, ...anotherBigObject }","samples":700,"opsSec":1399.6786057985364},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5914351,"opsSec":11823095.511754517},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13313147,"opsSec":26621612.216789108},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9695548,"opsSec":19384268.356693797}]}-->
