## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|133,238,497|66619305|
|Using parseInt(x, 10) - big number (10 len)|99,757,567|49878786|
|Using + - small number (2 len)|84,995,945|42499262|
|Using + - big number (10 len)|97,465,305|48734713|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:27:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":133238497.54670806,"samples":66619305},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":99757567.4111519,"samples":49878786},{"name":"Using + - small number (2 len)","opsSec":84995945.5629954,"samples":42499262},{"name":"Using + - big number (10 len)","opsSec":97465305.36181991,"samples":48734713}]}-->
