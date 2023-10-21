## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|202,624,779|94|
|Using parseInt(x, 10) - big number (10 len)|15,118,716|96|
|Using + - small number (2 len)|600,255,376|98|
|Using + - big number (10 len)|598,582,530|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:07:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759742736816406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":202624778.95117012,"samples":9},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15118715.891566949,"samples":6},{"name":"Using + - small number (2 len)","opsSec":600255375.5064838,"samples":6},{"name":"Using + - big number (10 len)","opsSec":598582530.1791689,"samples":6}]}-->
