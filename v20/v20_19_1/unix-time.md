## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,708,490|5354272|
|Date.now()|20,520,473|10260238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:32:27 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().getTime()","samples":5354272,"opsSec":10708490.114877742},{"name":"Date.now()","samples":10260238,"opsSec":20520473.742747888}]}-->
