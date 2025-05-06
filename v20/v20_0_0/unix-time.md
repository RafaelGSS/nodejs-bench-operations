## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,232,626|5116314|
|Date.now()|19,747,052|9874274|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:30:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":5116314,"opsSec":10232626.9358068},{"name":"Date.now()","samples":9874274,"opsSec":19747052.51621884}]}-->
