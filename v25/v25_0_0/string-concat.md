## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,812,754|47406394|
|Using backtick (`)|94,808,575|47404382|
|Using array.join|9,822,160|4912682|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:54:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":47406394,"opsSec":94812754.05703405},{"name":"Using backtick (`)","samples":47404382,"opsSec":94808575.1413183},{"name":"Using array.join","samples":4912682,"opsSec":9822160.345248831}]}-->
