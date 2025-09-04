## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,496,695|748378|
|fromUnixToISOString(new Date())|2,230,017|1115178|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:45:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":748378,"opsSec":1496695.2581196446},{"name":"fromUnixToISOString(new Date())","samples":1115178,"opsSec":2230017.857932166}]}-->
