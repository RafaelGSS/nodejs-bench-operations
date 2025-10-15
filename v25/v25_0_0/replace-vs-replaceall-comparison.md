## replace vs replaceAll comparison

|name|ops/sec|samples|
|-|-|-|
|Using replace(//g)|4,230,246|2115619|
|Using replaceAll()|2,966,019|1483496|
|Using replaceAll(//g)|3,713,037|1857235|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:28:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using replace(//g)","samples":2115619,"opsSec":4230246.793952721},{"name":"Using replaceAll()","samples":1483496,"opsSec":2966019.78617041},{"name":"Using replaceAll(//g)","samples":1857235,"opsSec":3713037.792210637}]}-->
