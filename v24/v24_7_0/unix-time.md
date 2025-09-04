## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,711,975|6355991|
|Date.now()|20,544,426|10277075|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:57:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":6355991,"opsSec":12711975.694860056},{"name":"Date.now()","samples":10277075,"opsSec":20544426.692646053}]}-->
