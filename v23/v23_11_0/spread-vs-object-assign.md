## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,877|1439|
|{...smallObject} - Total keys: 2|36,940,657|18471877|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,033|517|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,633|3318|
|{ ...bigObject, ...anotherBigObject }|1,399|701|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,458,923|5737103|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|25,921,616|12961062|
|{ ...smallObject, ...anotherSmallObject }|19,576,297|9789859|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:21:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1439,"opsSec":2877.424871826319},{"name":"{...smallObject} - Total keys: 2","samples":18471877,"opsSec":36940657.85570248},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":517,"opsSec":1033.5343039121376},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3318,"opsSec":6633.998801189631},{"name":"{ ...bigObject, ...anotherBigObject }","samples":701,"opsSec":1399.8250302581866},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5737103,"opsSec":11458923.462955926},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":12961062,"opsSec":25921616.19553873},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9789859,"opsSec":19576297.78586124}]}-->
