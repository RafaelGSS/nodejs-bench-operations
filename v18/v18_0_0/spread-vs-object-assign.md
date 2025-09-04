## Object.assign VS spread operator

|name|ops/sec|samples|
|-|-|-|
|{...bigObject} - Total keys: 1000|1,661|831|
|{...smallObject} - Total keys: 2|38,954,958|19477510|
|Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object|1,021|511|
|Object.assign(bigObject, anotherBigObject) - mutating bigObject|6,415|3210|
|{ ...bigObject, ...anotherBigObject }|1,073|538|
|Object.assign({}, smallObject, anotherSmallObject) - creating new object|10,733,216|5370131|
|Object.assign(smallObject, anotherSmallObject) - mutating smallObject|27,488,863|13744463|
|{ ...smallObject, ...anotherSmallObject }|19,400,272|9700289|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:18:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"{...bigObject} - Total keys: 1000","samples":831,"opsSec":1661.4047319757708},{"name":"{...smallObject} - Total keys: 2","samples":19477510,"opsSec":38954958.60698523},{"name":"Object.assign({}, bigObject, anotherBigObject) - Total keys: 1000 - creating new object","samples":511,"opsSec":1021.67760554486},{"name":"Object.assign(bigObject, anotherBigObject) - mutating bigObject","samples":3210,"opsSec":6415.549430711125},{"name":"{ ...bigObject, ...anotherBigObject }","samples":538,"opsSec":1073.0830148329533},{"name":"Object.assign({}, smallObject, anotherSmallObject) - creating new object","samples":5370131,"opsSec":10733216.072976733},{"name":"Object.assign(smallObject, anotherSmallObject) - mutating smallObject","samples":13744463,"opsSec":27488863.160458818},{"name":"{ ...smallObject, ...anotherSmallObject }","samples":9700289,"opsSec":19400272.212909378}]}-->
