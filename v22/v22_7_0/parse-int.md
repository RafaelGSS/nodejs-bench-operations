## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,840,796|7420399|
|Using parseInt(x, 10) - big number (10 len)|14,864,217|7432109|
|Using + - small number (2 len)|14,902,573|7451287|
|Using + - big number (10 len)|14,893,405|7446703|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:49:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14840796.7237215,"samples":7420399},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14864217.791942952,"samples":7432109},{"name":"Using + - small number (2 len)","opsSec":14902573.016286395,"samples":7451287},{"name":"Using + - big number (10 len)","opsSec":14893405.91055241,"samples":7446703}]}-->
