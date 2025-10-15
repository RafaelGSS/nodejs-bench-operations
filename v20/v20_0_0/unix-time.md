## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,707,244|5355298|
|Date.now()|20,569,829|10287538|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:13:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5355298,"opsSec":10707244.247089867},{"name":"Date.now()","samples":10287538,"opsSec":20569829.829460632}]}-->
