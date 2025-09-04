## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|98,303,340|49151675|
|Using backtick (`)|98,412,926|49246304|
|Using array.join|10,098,521|5049909|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:31:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":49151675,"opsSec":98303340.95609263},{"name":"Using backtick (`)","samples":49246304,"opsSec":98412926.20286718},{"name":"Using array.join","samples":5049909,"opsSec":10098521.834525496}]}-->
