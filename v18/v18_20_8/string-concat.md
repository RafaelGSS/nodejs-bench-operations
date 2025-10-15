## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|99,745,078|50117025|
|Using backtick (`)|100,296,842|50148440|
|Using array.join|10,582,667|5292647|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:52:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":50117025,"opsSec":99745078.28082067},{"name":"Using backtick (`)","samples":50148440,"opsSec":100296842.68957452},{"name":"Using array.join","samples":5292647,"opsSec":10582667.635876799}]}-->
