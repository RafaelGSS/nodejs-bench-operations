## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|113,379,773|56902041|
|~ (small)|81,109,055|40559379|
|Math.floor (long)|82,880,513|41580741|
|~ (long)|78,824,162|39412123|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:11:04 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Math.floor (small)","opsSec":113379773.616888,"samples":56902041},{"name":"~ (small)","opsSec":81109055.41035558,"samples":40559379},{"name":"Math.floor (long)","opsSec":82880513.57798906,"samples":41580741},{"name":"~ (long)","opsSec":78824162.28873965,"samples":39412123}]}-->
