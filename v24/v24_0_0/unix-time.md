## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,477,996|6241962|
|Date.now()|19,847,045|9934078|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:28:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":6241962,"opsSec":12477996.826727336},{"name":"Date.now()","samples":9934078,"opsSec":19847045.729503907}]}-->
