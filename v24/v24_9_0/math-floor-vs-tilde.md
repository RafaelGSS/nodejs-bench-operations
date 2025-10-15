## Math.floor vs ~

|name|ops/sec|samples|
|-|-|-|
|Math.floor (small)|89,274,994|44650992|
|~ (small)|95,382,162|47691099|
|Math.floor (long)|95,054,380|47535973|
|~ (long)|95,733,572|47866795|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:53:16 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Math.floor (small)","samples":44650992,"opsSec":89274994.38369791},{"name":"~ (small)","samples":47691099,"opsSec":95382162.89936405},{"name":"Math.floor (long)","samples":47535973,"opsSec":95054380.71087968},{"name":"~ (long)","samples":47866795,"opsSec":95733572.00208846}]}-->
