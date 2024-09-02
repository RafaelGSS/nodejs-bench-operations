## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,868,515|7434258|
|Using parseInt(x, 10) - big number (10 len)|15,207,144|7603573|
|Using + - small number (2 len)|15,360,363|7680182|
|Using + - big number (10 len)|15,702,063|7851032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:46:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14868515.078141043,"samples":7434258},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15207144.813743273,"samples":7603573},{"name":"Using + - small number (2 len)","opsSec":15360363.539133059,"samples":7680182},{"name":"Using + - big number (10 len)","opsSec":15702063.246400448,"samples":7851032}]}-->
