## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|98,507,952|49253991|
|~ (small)|98,273,241|49459560|
|Math.floor (long)|89,526,098|44779342|
|~ (long)|100,461,981|50241773|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:24:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":49253991,"opsSec":98507952.44761427},{"name":"~ (small)","samples":49459560,"opsSec":98273241.91689335},{"name":"Math.floor (long)","samples":44779342,"opsSec":89526098.46973118},{"name":"~ (long)","samples":50241773,"opsSec":100461981.23295645}]}-->
