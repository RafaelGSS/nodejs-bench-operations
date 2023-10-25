## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,061,973|92|
|Date.now()|14,079,563|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7061972.926627166,"samples":6},{"name":"Date.now()","opsSec":14079563.482732948,"samples":6}]}-->
