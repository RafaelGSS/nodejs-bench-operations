## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,115,978|7057990|
|Using parseInt(x, 10) - big number (10 len)|15,085,739|7542870|
|Using + - small number (2 len)|14,819,588|7409795|
|Using + - big number (10 len)|14,818,347|7409174|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:45:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14115978.352319188,"samples":7057990},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15085739.488928486,"samples":7542870},{"name":"Using + - small number (2 len)","opsSec":14819588.960115843,"samples":7409795},{"name":"Using + - big number (10 len)","opsSec":14818347.077066986,"samples":7409174}]}-->
