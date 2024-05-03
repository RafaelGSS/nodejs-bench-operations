## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|937,849,424|96|
|Using parseInt(x, 10) - big number (10 len)|938,291,236|95|
|Using + - small number (2 len)|941,392,856|99|
|Using + - big number (10 len)|939,061,972|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:06:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":937849423.8940759,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":938291235.9965589,"samples":6},{"name":"Using + - small number (2 len)","opsSec":941392856.3119822,"samples":6},{"name":"Using + - big number (10 len)","opsSec":939061972.4843779,"samples":6}]}-->
