## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|18,967,079|9483540|
|Using parseInt(x, 10) - big number (10 len)|18,712,167|9356084|
|Using + - small number (2 len)|18,776,286|9388151|
|Using + - big number (10 len)|18,599,244|9299625|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:44:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":18967079.27929228,"samples":9483540},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":18712167.40105986,"samples":9356084},{"name":"Using + - small number (2 len)","opsSec":18776286.566528488,"samples":9388151},{"name":"Using + - big number (10 len)","opsSec":18599244.71768767,"samples":9299625}]}-->
