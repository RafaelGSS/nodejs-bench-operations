## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|281,969,883|94|
|Using parseInt(x, 10) - big number (10 len)|21,311,802|95|
|Using + - small number (2 len)|845,778,825|95|
|Using + - big number (10 len)|846,381,336|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:10:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":281969882.6601386,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":21311802.018235248,"samples":9},{"name":"Using + - small number (2 len)","opsSec":845778825.2149307,"samples":6},{"name":"Using + - big number (10 len)","opsSec":846381336.3615258,"samples":7}]}-->
