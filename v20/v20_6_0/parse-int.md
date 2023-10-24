## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|660,229,954|91|
|Using parseInt(x, 10) - big number (10 len)|661,138,237|90|
|Using + - small number (2 len)|656,051,010|89|
|Using + - big number (10 len)|663,364,888|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":660229953.7242391,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":661138237.3597826,"samples":6},{"name":"Using + - small number (2 len)","opsSec":656051010.2378299,"samples":7},{"name":"Using + - big number (10 len)","opsSec":663364887.6813575,"samples":7}]}-->
