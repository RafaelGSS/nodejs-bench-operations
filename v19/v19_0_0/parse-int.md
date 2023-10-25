## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|150,450,256|81|
|Using parseInt(x, 10) - big number (10 len)|12,750,843|85|
|Using + - small number (2 len)|750,693,675|86|
|Using + - big number (10 len)|720,008,502|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":150450255.96142447,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":12750842.899290834,"samples":6},{"name":"Using + - small number (2 len)","opsSec":750693675.1907848,"samples":8},{"name":"Using + - big number (10 len)","opsSec":720008502.3199868,"samples":6}]}-->
