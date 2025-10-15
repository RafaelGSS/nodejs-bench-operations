## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,757,986|4879205|
|Date.now()|18,059,317|9032239|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:15:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4879205,"opsSec":9757986.288719371},{"name":"Date.now()","samples":9032239,"opsSec":18059317.62222672}]}-->
