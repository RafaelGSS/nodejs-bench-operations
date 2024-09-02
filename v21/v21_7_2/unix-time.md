## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,176,169|3088085|
|Date.now()|8,033,453|4016727|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:44:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6176169.34532275,"samples":3088085},{"name":"Date.now()","opsSec":8033453.469812641,"samples":4016727}]}-->
