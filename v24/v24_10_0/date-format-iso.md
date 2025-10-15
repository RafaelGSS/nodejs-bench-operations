## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,450,662|725382|
|fromUnixToISOString(new Date())|3,015,941|1507972|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:20:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":725382,"opsSec":1450662.5232551731},{"name":"fromUnixToISOString(new Date())","samples":1507972,"opsSec":3015941.6535973935}]}-->
