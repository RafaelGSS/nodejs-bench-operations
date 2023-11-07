## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|293,297,521|88|
|Using parseInt(x, 10) - big number (10 len)|21,416,275|96|
|Using + - small number (2 len)|851,051,273|96|
|Using + - big number (10 len)|847,881,088|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:06:51 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":293297520.9026808,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":21416274.963520404,"samples":6},{"name":"Using + - small number (2 len)","opsSec":851051273.1759746,"samples":7},{"name":"Using + - big number (10 len)","opsSec":847881088.2355431,"samples":9}]}-->
