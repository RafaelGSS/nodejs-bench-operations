## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|144,902,501|91|
|Using parseInt(x, 10) - big number (10 len)|11,245,801|90|
|Using + - small number (2 len)|694,353,652|91|
|Using + - big number (10 len)|695,488,602|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":144902501.08898026,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11245800.548568252,"samples":7},{"name":"Using + - small number (2 len)","opsSec":694353651.8041191,"samples":6},{"name":"Using + - big number (10 len)","opsSec":695488601.7192608,"samples":9}]}-->
