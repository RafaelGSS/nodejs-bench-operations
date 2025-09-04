## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|93,047,861|46544344|
|Using parseInt(x, 10) - big number (10 len)|96,145,609|48073376|
|Using + - small number (2 len)|97,271,189|48645614|
|Using + - big number (10 len)|95,047,959|47533403|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:33:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46544344,"opsSec":93047861.76188618},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48073376,"opsSec":96145609.59786677},{"name":"Using + - small number (2 len)","samples":48645614,"opsSec":97271189.16232066},{"name":"Using + - big number (10 len)","samples":47533403,"opsSec":95047959.51039644}]}-->
