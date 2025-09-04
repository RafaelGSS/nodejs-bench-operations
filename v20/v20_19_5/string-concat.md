## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|100,087,748|50194935|
|Using backtick (`)|99,455,756|49727887|
|Using array.join|10,777,706|5389122|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:31:26 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":50194935,"opsSec":100087748.32571194},{"name":"Using backtick (`)","samples":49727887,"opsSec":99455756.29687537},{"name":"Using array.join","samples":5389122,"opsSec":10777706.752873784}]}-->
