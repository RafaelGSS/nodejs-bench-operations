## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,861,356|5430680|
|Date.now()|20,122,789|10070716|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:55:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5430680,"opsSec":10861356.024743695},{"name":"Date.now()","samples":10070716,"opsSec":20122789.241906837}]}-->
