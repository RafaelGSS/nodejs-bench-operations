## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,509,874|5755496|
|Date.now()|20,087,556|10048979|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:32:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":5755496,"opsSec":11509874.713441817},{"name":"Date.now()","samples":10048979,"opsSec":20087556.26161661}]}-->
