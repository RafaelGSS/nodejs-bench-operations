## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|99,371,097|49685555|
|~ (small)|100,389,369|50202217|
|Math.floor (long)|93,790,177|46901783|
|~ (long)|101,754,003|50915168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:50:21 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":49685555,"opsSec":99371097.28049955},{"name":"~ (small)","samples":50202217,"opsSec":100389369.77195077},{"name":"Math.floor (long)","samples":46901783,"opsSec":93790177.63972229},{"name":"~ (long)","samples":50915168,"opsSec":101754003.60613081}]}-->
