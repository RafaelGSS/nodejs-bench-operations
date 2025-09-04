## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,510,578|48255344|
|Using parseInt(x, 10) - big number (10 len)|97,100,142|48550082|
|Using + - small number (2 len)|88,334,628|44167331|
|Using + - big number (10 len)|89,629,006|44815275|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:32:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48255344,"opsSec":96510578.9430458},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48550082,"opsSec":97100142.24956812},{"name":"Using + - small number (2 len)","samples":44167331,"opsSec":88334628.60951039},{"name":"Using + - big number (10 len)","samples":44815275,"opsSec":89629006.76776147}]}-->
