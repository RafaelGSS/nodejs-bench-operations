## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|10,659,683|5329843|
|Date.now()|20,046,504|10130233|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:56:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"new Date().getTime()","samples":5329843,"opsSec":10659683.292440444},{"name":"Date.now()","samples":10130233,"opsSec":20046504.76331399}]}-->
