## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,279,762|6148969|
|Date.now()|19,827,572|9913790|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:15:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":6148969,"opsSec":12279762.428914666},{"name":"Date.now()","samples":9913790,"opsSec":19827572.386212204}]}-->
