## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|204,240,360|93|
|Using parseInt(x, 10) - big number (10 len)|15,115,453|98|
|Using + - small number (2 len)|597,392,357|95|
|Using + - big number (10 len)|596,944,240|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":204240360.21036646,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15115453.101029817,"samples":7},{"name":"Using + - small number (2 len)","opsSec":597392357.1086113,"samples":7},{"name":"Using + - big number (10 len)","opsSec":596944240.0359367,"samples":8}]}-->
