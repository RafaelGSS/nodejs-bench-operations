## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|852,198,667|95|
|Using parseInt(x, 10) - big number (10 len)|854,326,436|96|
|Using + - small number (2 len)|853,647,008|97|
|Using + - big number (10 len)|853,033,099|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:11:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":852198666.9030169,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":854326435.5307248,"samples":6},{"name":"Using + - small number (2 len)","opsSec":853647008.3421006,"samples":6},{"name":"Using + - big number (10 len)","opsSec":853033099.3163424,"samples":6}]}-->
