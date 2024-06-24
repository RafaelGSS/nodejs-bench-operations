## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,607,275|8303638|
|Using parseInt(x, 10) - big number (10 len)|8,496,212|4248107|
|Using + - small number (2 len)|17,169,880|8584941|
|Using + - big number (10 len)|17,212,999|8606500|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:08:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16607275.49665072,"samples":8303638},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8496212.624374565,"samples":4248107},{"name":"Using + - small number (2 len)","opsSec":17169880.27067007,"samples":8584941},{"name":"Using + - big number (10 len)","opsSec":17212999.40823702,"samples":8606500}]}-->
