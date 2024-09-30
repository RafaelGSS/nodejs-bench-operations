## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|140,534,713|70297937|
|Using parseInt(x, 10) - big number (10 len)|95,344,979|47722001|
|Using + - small number (2 len)|97,756,252|48878129|
|Using + - big number (10 len)|98,454,644|49227331|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:26:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":140534713.57372215,"samples":70297937},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":95344979.75506574,"samples":47722001},{"name":"Using + - small number (2 len)","opsSec":97756252.33013737,"samples":48878129},{"name":"Using + - big number (10 len)","opsSec":98454644.08125478,"samples":49227331}]}-->
