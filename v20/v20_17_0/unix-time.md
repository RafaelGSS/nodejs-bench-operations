## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,388,746|3194374|
|Date.now()|9,124,657|4562329|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:42:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":6388746.377258986,"samples":3194374},{"name":"Date.now()","opsSec":9124657.83576613,"samples":4562329}]}-->
