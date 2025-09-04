## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,935,422|47507368|
|Using backtick (`)|95,455,912|47772374|
|Using array.join|10,478,939|5241010|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:34:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.6.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47507368,"opsSec":94935422.0118094},{"name":"Using backtick (`)","samples":47772374,"opsSec":95455912.1462729},{"name":"Using array.join","samples":5241010,"opsSec":10478939.422346497}]}-->
