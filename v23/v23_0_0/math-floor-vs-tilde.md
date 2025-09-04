## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|87,594,059|43797050|
|~ (small)|84,916,838|42462709|
|Math.floor (long)|89,587,889|44793959|
|~ (long)|89,842,318|44921238|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:25:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":43797050,"opsSec":87594059.00598037},{"name":"~ (small)","samples":42462709,"opsSec":84916838.17250474},{"name":"Math.floor (long)","samples":44793959,"opsSec":89587889.86940259},{"name":"~ (long)","samples":44921238,"opsSec":89842318.05720486}]}-->
