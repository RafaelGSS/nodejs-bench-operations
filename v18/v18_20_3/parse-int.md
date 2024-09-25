## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|13,694,677|6847339|
|Using parseInt(x, 10) - big number (10 len)|7,788,965|3894483|
|Using + - small number (2 len)|14,574,636|7287319|
|Using + - big number (10 len)|14,308,155|7154078|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:20:08 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":13694677.647679016,"samples":6847339},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":7788965.489315626,"samples":3894483},{"name":"Using + - small number (2 len)","opsSec":14574636.903137391,"samples":7287319},{"name":"Using + - big number (10 len)","opsSec":14308155.905975211,"samples":7154078}]}-->
