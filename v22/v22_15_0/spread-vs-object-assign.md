## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,714|858|
|{...smallObject} - Total keys: 2|40,052,303|20050176|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,036|519|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,837|3419|
|{ ...bigObject, ...anotherBigObject }|1,092|547|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,990,212|5995138|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|28,275,189|14137637|
|{ ...smallObject, ...anotherSmallObject }|20,478,965|10243685|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:53:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":858,"opsSec":1714.9907485243823},{"name":"{...smallObject} - Total keys: 2","samples":20050176,"opsSec":40052303.494426735},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":519,"opsSec":1036.8498949909792},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3419,"opsSec":6837.444074772056},{"name":"{ ...bigObject, ...anotherBigObject }","samples":547,"opsSec":1092.4308214437701},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5995138,"opsSec":11990212.739637585},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":14137637,"opsSec":28275189.11788227},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":10243685,"opsSec":20478965.801056627}]}-->
