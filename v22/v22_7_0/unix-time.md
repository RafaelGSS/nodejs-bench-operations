## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,708,941|2854488|
|Date.now()|8,550,479|4275240|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:45:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5708941.757767064,"samples":2854488},{"name":"Date.now()","opsSec":8550479.521144211,"samples":4275240}]}-->
