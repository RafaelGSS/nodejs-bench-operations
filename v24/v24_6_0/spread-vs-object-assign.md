## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|2,650|1329|
|{...smallObject} - Total keys: 2|38,973,842|19496298|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,081|541|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|5,915|2958|
|{ ...bigObject, ...anotherBigObject }|1,465|733|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|12,313,484|6157451|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,579,245|13789720|
|{ ...smallObject, ...anotherSmallObject }|19,918,774|9959936|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:19:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1329,"opsSec":2650.1992392468483},{"name":"{...smallObject} - Total keys: 2","samples":19496298,"opsSec":38973842.09897271},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":541,"opsSec":1081.1978787553132},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":2958,"opsSec":5915.829304661243},{"name":"{ ...bigObject, ...anotherBigObject }","samples":733,"opsSec":1465.6781663882246},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":6157451,"opsSec":12313484.397795219},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13789720,"opsSec":27579245.95242548},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9959936,"opsSec":19918774.515361752}]}-->
