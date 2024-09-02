## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,665,452|2832727|
|Date.now()|8,190,404|4095204|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:41:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5665452.680866795,"samples":2832727},{"name":"Date.now()","opsSec":8190404.488477023,"samples":4095204}]}-->
