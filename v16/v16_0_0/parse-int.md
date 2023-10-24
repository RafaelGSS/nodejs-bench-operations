## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|135,404,822|95|
|Using parseInt(x, 10) - big number (10 len)|10,977,184|93|
|Using + - small number (2 len)|707,610,284|98|
|Using + - big number (10 len)|706,303,418|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":135404822.11346397,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":10977183.814084128,"samples":8},{"name":"Using + - small number (2 len)","opsSec":707610283.7488618,"samples":6},{"name":"Using + - big number (10 len)","opsSec":706303418.0426124,"samples":8}]}-->
