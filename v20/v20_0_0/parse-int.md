## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|100,658,564|50329285|
|Using parseInt(x, 10) - big number (10 len)|100,664,561|50348074|
|Using + - small number (2 len)|100,615,065|50307629|
|Using + - big number (10 len)|99,063,545|49563540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:11:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":50329285,"opsSec":100658564.76575463},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":50348074,"opsSec":100664561.6751667},{"name":"Using + - small number (2 len)","samples":50307629,"opsSec":100615065.62399451},{"name":"Using + - big number (10 len)","samples":49563540,"opsSec":99063545.19903241}]}-->
