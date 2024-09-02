## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|5,942,044|2971023|
|Date.now()|8,961,998|4481000|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 19:41:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().getTime()","opsSec":5942044.54425856,"samples":2971023},{"name":"Date.now()","opsSec":8961998.738274515,"samples":4481000}]}-->
