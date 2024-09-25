## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|13,988,529|6994265|
|Using parseInt(x, 10) - big number (10 len)|14,031,504|7015753|
|Using + - small number (2 len)|13,949,228|6974615|
|Using + - big number (10 len)|13,903,855|6951928|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:26:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":13988529.944022553,"samples":6994265},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14031504.624943526,"samples":7015753},{"name":"Using + - small number (2 len)","opsSec":13949228.4935091,"samples":6974615},{"name":"Using + - big number (10 len)","opsSec":13903855.749770068,"samples":6951928}]}-->
