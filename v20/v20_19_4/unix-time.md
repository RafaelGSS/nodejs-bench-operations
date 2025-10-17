## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,836,863|5418437|
|Date.now()|20,453,646|10227355|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:29:15 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().getTime()","samples":5418437,"opsSec":10836863.900042845},{"name":"Date.now()","samples":10227355,"opsSec":20453646.410386663}]}-->
