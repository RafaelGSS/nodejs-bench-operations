## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|92,441,112|46220562|
|Using backtick (`)|86,155,496|43077756|
|Using array.join|10,049,395|5024956|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:33:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using + sign","samples":46220562,"opsSec":92441112.90706646},{"name":"Using backtick (`)","samples":43077756,"opsSec":86155496.83663256},{"name":"Using array.join","samples":5024956,"opsSec":10049395.099313673}]}-->
