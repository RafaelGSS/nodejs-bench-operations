## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|596,658,059|94|
|Using parseInt(x, 10) - big number (10 len)|600,404,772|95|
|Using + - small number (2 len)|598,982,907|93|
|Using + - big number (10 len)|599,960,329|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":596658058.8931874,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":600404772.4364338,"samples":6},{"name":"Using + - small number (2 len)","opsSec":598982906.5426883,"samples":7},{"name":"Using + - big number (10 len)","opsSec":599960329.0487723,"samples":6}]}-->
