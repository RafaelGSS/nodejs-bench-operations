## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|96,719,599|48359813|
|Using backtick (`)|97,426,758|48715512|
|Using array.join|10,343,149|5178783|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:33:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":48359813,"opsSec":96719599.11195146},{"name":"Using backtick (`)","samples":48715512,"opsSec":97426758.07197106},{"name":"Using array.join","samples":5178783,"opsSec":10343149.387403058}]}-->
