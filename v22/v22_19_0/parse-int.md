## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,196,743|48122857|
|Using parseInt(x, 10) - big number (10 len)|95,981,619|47996557|
|Using + - small number (2 len)|94,621,624|47310835|
|Using + - big number (10 len)|97,472,375|48736207|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:33:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48122857,"opsSec":96196743.31627348},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47996557,"opsSec":95981619.04933941},{"name":"Using + - small number (2 len)","samples":47310835,"opsSec":94621624.5816202},{"name":"Using + - big number (10 len)","samples":48736207,"opsSec":97472375.40093935}]}-->
