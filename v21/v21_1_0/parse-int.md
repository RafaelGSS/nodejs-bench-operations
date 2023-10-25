## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|706,079,061|94|
|Using parseInt(x, 10) - big number (10 len)|713,396,380|96|
|Using + - small number (2 len)|713,077,648|96|
|Using + - big number (10 len)|712,360,617|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":706079061.0274659,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":713396379.8631185,"samples":6},{"name":"Using + - small number (2 len)","opsSec":713077647.8182667,"samples":8},{"name":"Using + - big number (10 len)","opsSec":712360617.1095392,"samples":6}]}-->
