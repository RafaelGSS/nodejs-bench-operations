## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,760,596|4880927|
|Date.now()|19,174,738|9597357|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:58:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4880927,"opsSec":9760596.776571598},{"name":"Date.now()","samples":9597357,"opsSec":19174738.10298959}]}-->
