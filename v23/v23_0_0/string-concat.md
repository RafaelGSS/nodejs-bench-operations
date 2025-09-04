## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|96,590,924|48296070|
|Using backtick (`)|95,388,052|47694043|
|Using array.join|10,170,259|5085131|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:32:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":48296070,"opsSec":96590924.30662668},{"name":"Using backtick (`)","samples":47694043,"opsSec":95388052.04185349},{"name":"Using array.join","samples":5085131,"opsSec":10170259.152327437}]}-->
