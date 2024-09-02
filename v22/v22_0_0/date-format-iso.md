## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,132,677|566339|
|fromUnixToISOString(new Date())|1,582,873|791438|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:00:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1132677.0462858535,"samples":566339},{"name":"fromUnixToISOString(new Date())","opsSec":1582873.9834178681,"samples":791438}]}-->
