## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,831,172|6417701|
|Date.now()|20,012,876|10008209|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:30:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":6417701,"opsSec":12831172.127121262},{"name":"Date.now()","samples":10008209,"opsSec":20012876.36129609}]}-->
