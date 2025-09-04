## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,553,199|46776622|
|Using parseInt(x, 10) - big number (10 len)|95,896,205|47948112|
|Using + - small number (2 len)|94,926,876|47464381|
|Using + - big number (10 len)|96,022,262|48025387|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:34:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.7.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46776622,"opsSec":93553199.46867704},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47948112,"opsSec":95896205.97151327},{"name":"Using + - small number (2 len)","samples":47464381,"opsSec":94926876.18267776},{"name":"Using + - big number (10 len)","samples":48025387,"opsSec":96022262.4936868}]}-->
