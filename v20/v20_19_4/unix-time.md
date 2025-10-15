## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,769,957|5385823|
|Date.now()|20,966,656|10484355|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:16:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5385823,"opsSec":10769957.033798046},{"name":"Date.now()","samples":10484355,"opsSec":20966656.525659874}]}-->
