## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|99,583,676|50192591|
|~ (small)|97,723,485|48861753|
|Math.floor (long)|100,458,066|50314423|
|~ (long)|100,429,908|50214962|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:21:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":50192591,"opsSec":99583676.80223659},{"name":"~ (small)","samples":48861753,"opsSec":97723485.67351499},{"name":"Math.floor (long)","samples":50314423,"opsSec":100458066.48331383},{"name":"~ (long)","samples":50214962,"opsSec":100429908.93551366}]}-->
