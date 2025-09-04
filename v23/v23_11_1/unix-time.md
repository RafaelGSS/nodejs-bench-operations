## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,672,156|6336764|
|Date.now()|18,936,578|9468329|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:56:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":6336764,"opsSec":12672156.087037707},{"name":"Date.now()","samples":9468329,"opsSec":18936578.99659243}]}-->
