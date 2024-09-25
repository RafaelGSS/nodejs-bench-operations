## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|13,891,025|6945513|
|Using parseInt(x, 10) - big number (10 len)|7,777,594|3888798|
|Using + - small number (2 len)|14,510,928|7255465|
|Using + - big number (10 len)|14,147,515|7073758|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:20:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":13891025.02646298,"samples":6945513},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":7777594.840265763,"samples":3888798},{"name":"Using + - small number (2 len)","opsSec":14510928.993396727,"samples":7255465},{"name":"Using + - big number (10 len)","opsSec":14147515.213082531,"samples":7073758}]}-->
