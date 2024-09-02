## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,521,288|7260645|
|Using parseInt(x, 10) - big number (10 len)|14,267,343|7133672|
|Using + - small number (2 len)|13,817,233|6908618|
|Using + - big number (10 len)|13,900,451|6950226|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:48:10 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14521288.983576678,"samples":7260645},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14267343.514876418,"samples":7133672},{"name":"Using + - small number (2 len)","opsSec":13817233.872088159,"samples":6908618},{"name":"Using + - big number (10 len)","opsSec":13900451.416204408,"samples":6950226}]}-->
