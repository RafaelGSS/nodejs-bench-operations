## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|95,339,617|47669855|
|~ (small)|95,573,668|47786847|
|Math.floor (long)|95,106,929|47557606|
|~ (long)|95,132,477|47566246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:21:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":47669855,"opsSec":95339617.90192911},{"name":"~ (small)","samples":47786847,"opsSec":95573668.19510959},{"name":"Math.floor (long)","samples":47557606,"opsSec":95106929.89833058},{"name":"~ (long)","samples":47566246,"opsSec":95132477.53986342}]}-->
