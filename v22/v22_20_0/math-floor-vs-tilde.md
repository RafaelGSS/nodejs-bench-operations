## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|96,310,801|48155421|
|~ (small)|97,835,516|48929989|
|Math.floor (long)|97,843,478|48925594|
|~ (long)|98,508,969|49255741|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:52:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":48155421,"opsSec":96310801.74208488},{"name":"~ (small)","samples":48929989,"opsSec":97835516.38151017},{"name":"Math.floor (long)","samples":48925594,"opsSec":97843478.52095342},{"name":"~ (long)","samples":49255741,"opsSec":98508969.0361999}]}-->
