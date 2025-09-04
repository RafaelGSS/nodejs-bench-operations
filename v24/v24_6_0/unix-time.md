## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,817,088|6409436|
|Date.now()|20,222,513|10119236|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:58:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":6409436,"opsSec":12817088.399612486},{"name":"Date.now()","samples":10119236,"opsSec":20222513.76726581}]}-->
