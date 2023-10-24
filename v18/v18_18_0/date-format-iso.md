## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,258,423|86|
|fromUnixToISOString(new Date())|997,462|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1258422.641301338,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":997462.0310220224,"samples":6}]}-->
