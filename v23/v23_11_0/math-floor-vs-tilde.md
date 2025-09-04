## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|90,393,603|45196822|
|~ (small)|97,087,228|48557123|
|Math.floor (long)|94,590,005|47332915|
|~ (long)|97,138,519|48573982|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:24:32 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":45196822,"opsSec":90393603.50366563},{"name":"~ (small)","samples":48557123,"opsSec":97087228.37191421},{"name":"Math.floor (long)","samples":47332915,"opsSec":94590005.7055264},{"name":"~ (long)","samples":48573982,"opsSec":97138519.22177607}]}-->
