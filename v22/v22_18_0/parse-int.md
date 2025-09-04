## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,551,952|48276962|
|Using parseInt(x, 10) - big number (10 len)|97,098,877|48650334|
|Using + - small number (2 len)|96,971,883|48505643|
|Using + - big number (10 len)|97,255,312|48634963|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:32:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48276962,"opsSec":96551952.79533175},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48650334,"opsSec":97098877.69496758},{"name":"Using + - small number (2 len)","samples":48505643,"opsSec":96971883.02688216},{"name":"Using + - big number (10 len)","samples":48634963,"opsSec":97255312.61123767}]}-->
