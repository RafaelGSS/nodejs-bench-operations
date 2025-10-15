## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|83,005,153|41502582|
|Using parseInt(x, 10) - big number (10 len)|82,915,312|41457673|
|Using + - small number (2 len)|80,435,698|40217853|
|Using + - big number (10 len)|83,581,051|41790545|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:00:19 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":41502582,"opsSec":83005153.04331979},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":41457673,"opsSec":82915312.83387487},{"name":"Using + - small number (2 len)","samples":40217853,"opsSec":80435698.27817297},{"name":"Using + - big number (10 len)","samples":41790545,"opsSec":83581051.21839224}]}-->
