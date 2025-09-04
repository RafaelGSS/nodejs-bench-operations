## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,371,991|686042|
|fromUnixToISOString(new Date())|2,029,911|1015315|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 17:46:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().toISOString()","samples":686042,"opsSec":1371991.7280683205},{"name":"fromUnixToISOString(new Date())","samples":1015315,"opsSec":2029911.3058423437}]}-->
