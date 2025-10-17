## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|3,112|1557|
|{...smallObject} - Total keys: 2|38,893,292|19447876|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,071|536|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,503|3252|
|{ ...bigObject, ...anotherBigObject }|1,493|747|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|11,724,579|5870756|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|26,970,156|13486808|
|{ ...smallObject, ...anotherSmallObject }|19,925,975|9963028|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:05:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":1557,"opsSec":3112.5583625683257},{"name":"{...smallObject} - Total keys: 2","samples":19447876,"opsSec":38893292.62153437},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":536,"opsSec":1071.7270268393559},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3252,"opsSec":6503.040502386035},{"name":"{ ...bigObject, ...anotherBigObject }","samples":747,"opsSec":1493.3609221668023},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5870756,"opsSec":11724579.292238673},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13486808,"opsSec":26970156.214420505},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9963028,"opsSec":19925975.299800035}]}-->
