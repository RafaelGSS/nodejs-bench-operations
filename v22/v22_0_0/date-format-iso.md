## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,315,280|657876|
|fromUnixToISOString(new Date())|1,843,183|921608|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:44:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":657876,"opsSec":1315280.2720998507},{"name":"fromUnixToISOString(new Date())","samples":921608,"opsSec":1843183.7516570813}]}-->
