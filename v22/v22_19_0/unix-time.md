## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,469,641|5238380|
|Date.now()|20,720,521|10363171|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:57:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5238380,"opsSec":10469641.920790179},{"name":"Date.now()","samples":10363171,"opsSec":20720521.35690459}]}-->
