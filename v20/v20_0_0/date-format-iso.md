## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,462,814|731539|
|fromUnixToISOString(new Date())|2,118,577|1059290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:02:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":731539,"opsSec":1462814.6056021154},{"name":"fromUnixToISOString(new Date())","samples":1059290,"opsSec":2118577.3348297128}]}-->
