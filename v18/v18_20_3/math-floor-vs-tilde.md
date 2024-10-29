## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|143,727,596|71864690|
|~ (small)|103,947,960|51973994|
|Math.floor (long)|88,623,470|44334533|
|~ (long)|106,453,619|53227464|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:11:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Math.floor (small)","opsSec":143727596.91543266,"samples":71864690},{"name":"~ (small)","opsSec":103947960.34984255,"samples":51973994},{"name":"Math.floor (long)","opsSec":88623470.64233005,"samples":44334533},{"name":"~ (long)","opsSec":106453619.47210944,"samples":53227464}]}-->
