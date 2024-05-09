## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|19,964,712|9982357|
|Using parseInt(x, 10) - big number (10 len)|19,951,021|9975511|
|Using + - small number (2 len)|20,022,968|10011485|
|Using + - big number (10 len)|19,943,938|9971970|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:21:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":19964712.602484133,"samples":9982357},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":19951021.76061386,"samples":9975511},{"name":"Using + - small number (2 len)","opsSec":20022968.478247978,"samples":10011485},{"name":"Using + - big number (10 len)","opsSec":19943938.165136535,"samples":9971970}]}-->
