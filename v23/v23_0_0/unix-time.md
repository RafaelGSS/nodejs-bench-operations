## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|11,871,635|5944668|
|Date.now()|19,930,972|9967195|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:31:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":5944668,"opsSec":11871635.249383546},{"name":"Date.now()","samples":9967195,"opsSec":19930972.914417714}]}-->
