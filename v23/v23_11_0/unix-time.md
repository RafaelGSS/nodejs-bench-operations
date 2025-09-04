## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,256,985|6128690|
|Date.now()|20,039,661|10020042|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:56:40 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":6128690,"opsSec":12256985.177993447},{"name":"Date.now()","samples":10020042,"opsSec":20039661.24330641}]}-->
