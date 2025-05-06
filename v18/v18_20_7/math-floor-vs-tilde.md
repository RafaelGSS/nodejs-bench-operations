## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|98,920,172|49460097|
|~ (small)|106,508,076|53254049|
|Math.floor (long)|102,982,117|51491089|
|~ (long)|94,409,873|47248576|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:01:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Math.floor (small)","samples":49460097,"opsSec":98920172.83108301},{"name":"~ (small)","samples":53254049,"opsSec":106508076.05933633},{"name":"Math.floor (long)","samples":51491089,"opsSec":102982117.24055083},{"name":"~ (long)","samples":47248576,"opsSec":94409873.2820864}]}-->
