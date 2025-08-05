## String concat

|name|ops/sec|samples|
|-|-|-|
|Using + sign|94,644,790|47323381|
|Using backtick (`)|95,259,791|47630115|
|Using array.join|10,034,645|5017325|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:43:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using + sign","samples":47323381,"opsSec":94644790.17044158},{"name":"Using backtick (`)","samples":47630115,"opsSec":95259791.23340157},{"name":"Using array.join","samples":5017325,"opsSec":10034645.725240922}]}-->
