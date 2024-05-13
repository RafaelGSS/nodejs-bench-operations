## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,243,681|7621841|
|Using parseInt(x, 10) - big number (10 len)|15,238,506|7619254|
|Using + - small number (2 len)|15,246,900|7623451|
|Using + - big number (10 len)|15,244,565|7622283|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 17:08:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15243681.908545421,"samples":7621841},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15238506.354232607,"samples":7619254},{"name":"Using + - small number (2 len)","opsSec":15246900.383842878,"samples":7623451},{"name":"Using + - big number (10 len)","opsSec":15244565.695122726,"samples":7622283}]}-->
