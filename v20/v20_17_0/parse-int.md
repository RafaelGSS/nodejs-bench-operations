## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|17,287,585|8643793|
|Using parseInt(x, 10) - big number (10 len)|17,273,075|8636538|
|Using + - small number (2 len)|17,377,841|8688921|
|Using + - big number (10 len)|17,383,318|8691660|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:44:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":17287585.44687884,"samples":8643793},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":17273075.1708857,"samples":8636538},{"name":"Using + - small number (2 len)","opsSec":17377841.965254292,"samples":8688921},{"name":"Using + - big number (10 len)","opsSec":17383318.5397986,"samples":8691660}]}-->
