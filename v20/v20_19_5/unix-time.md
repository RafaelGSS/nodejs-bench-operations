## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,114,460|5557611|
|Date.now()|20,674,593|10337397|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:31:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":5557611,"opsSec":11114460.59276263},{"name":"Date.now()","samples":10337397,"opsSec":20674593.29104833}]}-->
