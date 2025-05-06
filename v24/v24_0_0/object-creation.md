## Object Creation

|name|ops/sec|samples|
|-|-|-|
|Object.create(null)|31,569,212|15789002|
|Object.create({})|2,004,419|1002822|
|new Function with empty prototype|71,648,790|35828670|
|Empty class|75,393,946|37709810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:05:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Object.create(null)","samples":15789002,"opsSec":31569212.03758596},{"name":"Object.create({})","samples":1002822,"opsSec":2004419.5241657216},{"name":"new Function with empty prototype","samples":35828670,"opsSec":71648790.43643238},{"name":"Empty class","samples":37709810,"opsSec":75393946.25027129}]}-->
