## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|133,525,386|91|
|Using parseInt(x, 10) - big number (10 len)|12,421,384|90|
|Using + - small number (2 len)|606,644,162|91|
|Using + - big number (10 len)|611,323,827|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":133525386.29669821,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":12421383.843354285,"samples":6},{"name":"Using + - small number (2 len)","opsSec":606644162.0602872,"samples":7},{"name":"Using + - big number (10 len)","opsSec":611323827.3537323,"samples":6}]}-->
