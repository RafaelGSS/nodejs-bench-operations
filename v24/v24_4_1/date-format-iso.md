## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,548,751|774376|
|fromUnixToISOString(new Date())|2,934,941|1467475|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:02:52 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":774376,"opsSec":1548751.073846858},{"name":"fromUnixToISOString(new Date())","samples":1467475,"opsSec":2934941.711724606}]}-->
