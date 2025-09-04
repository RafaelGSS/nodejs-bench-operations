## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,888|1446|
|{...smallObject} - Total keys: 2|38,138,509|19074120|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,044|523|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,608|3305|
|{ ...bigObject, ...anotherBigObject }|1,411|706|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,017,971|6008996|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,742,630|13371324|
|{ ...smallObject, ...anotherSmallObject }|19,668,799|9834859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:21:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1446,"opsSec":2888.8771122861103},{"name":"{...smallObject} - Total keys: 2","samples":19074120,"opsSec":38138509.49324193},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":523,"opsSec":1044.7302807848666},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3305,"opsSec":6608.9260627326585},{"name":"{ ...bigObject, ...anotherBigObject }","samples":706,"opsSec":1411.5264498144047},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6008996,"opsSec":12017971.64155604},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13371324,"opsSec":26742630.456834417},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9834859,"opsSec":19668799.78175099}]}-->
