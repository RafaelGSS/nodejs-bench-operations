## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,499,441|5249723|
|Date.now()|19,972,228|9996494|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:28:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":5249723,"opsSec":10499441.506239034},{"name":"Date.now()","samples":9996494,"opsSec":19972228.945123356}]}-->
