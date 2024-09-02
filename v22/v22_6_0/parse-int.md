## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,098,168|7549218|
|Using parseInt(x, 10) - big number (10 len)|14,656,028|7328015|
|Using + - small number (2 len)|14,870,268|7435135|
|Using + - big number (10 len)|14,467,159|7233580|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:48:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15098168.973696703,"samples":7549218},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14656028.387989782,"samples":7328015},{"name":"Using + - small number (2 len)","opsSec":14870268.156015582,"samples":7435135},{"name":"Using + - big number (10 len)","opsSec":14467159.508260619,"samples":7233580}]}-->
