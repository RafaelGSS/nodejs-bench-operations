## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,749,970|5375536|
|Date.now()|20,350,310|10175337|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:13:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5375536,"opsSec":10749970.128061876},{"name":"Date.now()","samples":10175337,"opsSec":20350310.29925433}]}-->
