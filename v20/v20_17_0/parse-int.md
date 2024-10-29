## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|141,095,279|70571986|
|Using parseInt(x, 10) - big number (10 len)|90,612,451|45306235|
|Using + - small number (2 len)|97,437,345|48730745|
|Using + - big number (10 len)|97,094,972|48547503|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:29:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":141095279.17258587,"samples":70571986},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":90612451.15261017,"samples":45306235},{"name":"Using + - small number (2 len)","opsSec":97437345.220729,"samples":48730745},{"name":"Using + - big number (10 len)","opsSec":97094972.01675978,"samples":48547503}]}-->
