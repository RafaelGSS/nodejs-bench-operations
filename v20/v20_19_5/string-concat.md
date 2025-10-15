## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|99,600,206|49800108|
|Using backtick (`)|98,980,518|49491319|
|Using array.join|10,998,937|5500813|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:53:25 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":49800108,"opsSec":99600206.83678097},{"name":"Using backtick (`)","samples":49491319,"opsSec":98980518.03526472},{"name":"Using array.join","samples":5500813,"opsSec":10998937.111842142}]}-->
