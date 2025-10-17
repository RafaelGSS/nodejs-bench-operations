## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|97,257,791|48628923|
|~ (small)|96,285,740|48346699|
|Math.floor (long)|97,563,558|48790269|
|~ (long)|98,201,613|49104518|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:27:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Math.floor (small)","samples":48628923,"opsSec":97257791.14660579},{"name":"~ (small)","samples":48346699,"opsSec":96285740.35135674},{"name":"Math.floor (long)","samples":48790269,"opsSec":97563558.81873165},{"name":"~ (long)","samples":49104518,"opsSec":98201613.92201976}]}-->
