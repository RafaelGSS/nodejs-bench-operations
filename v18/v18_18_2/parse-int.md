## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|172,227,281|88|
|Using parseInt(x, 10) - big number (10 len)|12,992,635|82|
|Using + - small number (2 len)|828,439,890|86|
|Using + - big number (10 len)|843,805,331|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":172227280.94880483,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":12992635.064308839,"samples":5},{"name":"Using + - small number (2 len)","opsSec":828439890.1271108,"samples":5},{"name":"Using + - big number (10 len)","opsSec":843805331.4145874,"samples":7}]}-->
