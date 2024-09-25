## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,730,492|865247|
|fromUnixToISOString(new Date())|1,781,030|890516|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:32:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1730492.1860355262,"samples":865247},{"name":"fromUnixToISOString(new Date())","opsSec":1781030.343228589,"samples":890516}]}-->
