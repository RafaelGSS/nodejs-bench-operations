## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,619,955|6310921|
|Date.now()|20,135,618|10067810|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:48:50 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":6310921,"opsSec":12619955.468096986},{"name":"Date.now()","samples":10067810,"opsSec":20135618.066980667}]}-->
