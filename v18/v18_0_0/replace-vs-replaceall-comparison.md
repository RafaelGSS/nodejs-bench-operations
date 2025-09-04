## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|3,366,015|1683017|
|Using replaceAll()|2,946,422|1473213|
|Using replaceAll(//g)|3,028,795|1515014|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:04:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":1683017,"opsSec":3366015.958154464},{"name":"Using replaceAll()","samples":1473213,"opsSec":2946422.806077678},{"name":"Using replaceAll(//g)","samples":1515014,"opsSec":3028795.128942764}]}-->
