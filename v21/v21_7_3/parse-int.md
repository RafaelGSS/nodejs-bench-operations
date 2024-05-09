## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,309,063|7654532|
|Using parseInt(x, 10) - big number (10 len)|15,316,954|7658478|
|Using + - small number (2 len)|15,323,803|7661902|
|Using + - big number (10 len)|15,369,966|7684984|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 22:23:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15309063.693826182,"samples":7654532},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15316954.529579028,"samples":7658478},{"name":"Using + - small number (2 len)","opsSec":15323803.754835725,"samples":7661902},{"name":"Using + - big number (10 len)","opsSec":15369966.217107471,"samples":7684984}]}-->
