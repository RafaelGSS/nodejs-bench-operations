## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,572,018|7286010|
|Using parseInt(x, 10) - big number (10 len)|14,587,247|7293624|
|Using + - small number (2 len)|14,587,597|7293799|
|Using + - big number (10 len)|14,999,437|7499719|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:43:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14572018.794275858,"samples":7286010},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14587247.259430895,"samples":7293624},{"name":"Using + - small number (2 len)","opsSec":14587597.456895707,"samples":7293799},{"name":"Using + - big number (10 len)","opsSec":14999437.817281358,"samples":7499719}]}-->
