## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,582,196|6292043|
|Date.now()|20,385,432|10193865|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:15:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":6292043,"opsSec":12582196.103816422},{"name":"Date.now()","samples":10193865,"opsSec":20385432.928646736}]}-->
