## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|134,902,274|96|
|Using parseInt(x, 10) - big number (10 len)|10,918,059|94|
|Using + - small number (2 len)|704,818,605|95|
|Using + - big number (10 len)|701,968,654|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":134902274.13569093,"samples":9},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":10918058.837425686,"samples":6},{"name":"Using + - small number (2 len)","opsSec":704818604.9131196,"samples":7},{"name":"Using + - big number (10 len)","opsSec":701968653.6844335,"samples":8}]}-->
