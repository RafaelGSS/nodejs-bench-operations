## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|98,923,594|49461803|
|Using parseInt(x, 10) - big number (10 len)|98,715,462|49379419|
|Using + - small number (2 len)|100,032,822|50016412|
|Using + - big number (10 len)|99,065,560|49545290|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:34:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49461803,"opsSec":98923594.72271019},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49379419,"opsSec":98715462.22846588},{"name":"Using + - small number (2 len)","samples":50016412,"opsSec":100032822.39947484},{"name":"Using + - big number (10 len)","samples":49545290,"opsSec":99065560.00216584}]}-->
