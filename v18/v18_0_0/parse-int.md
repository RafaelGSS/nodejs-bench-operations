## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|267,038,387|97|
|Using parseInt(x, 10) - big number (10 len)|20,543,041|98|
|Using + - small number (2 len)|910,073,862|100|
|Using + - big number (10 len)|908,966,092|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 23:04:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":267038387.46289527,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20543041.434031535,"samples":4},{"name":"Using + - small number (2 len)","opsSec":910073861.6882558,"samples":6},{"name":"Using + - big number (10 len)","opsSec":908966091.8176341,"samples":7}]}-->
