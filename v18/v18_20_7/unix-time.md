## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|9,817,812|4912209|
|Date.now()|19,464,292|9732175|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:14:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":4912209,"opsSec":9817812.909280274},{"name":"Date.now()","samples":9732175,"opsSec":19464292.502479948}]}-->
