## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,460,841|7230421|
|Using parseInt(x, 10) - big number (10 len)|7,784,290|3892146|
|Using + - small number (2 len)|14,884,168|7442085|
|Using + - big number (10 len)|14,755,956|7377979|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:41:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14460841.427137569,"samples":7230421},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":7784290.866758112,"samples":3892146},{"name":"Using + - small number (2 len)","opsSec":14884168.415466841,"samples":7442085},{"name":"Using + - big number (10 len)","opsSec":14755956.95138802,"samples":7377979}]}-->
