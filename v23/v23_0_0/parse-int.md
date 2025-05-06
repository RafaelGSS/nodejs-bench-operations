## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|97,079,526|48539785|
|Using parseInt(x, 10) - big number (10 len)|95,940,733|47975440|
|Using + - small number (2 len)|96,802,214|48403008|
|Using + - big number (10 len)|97,209,005|48605802|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:09:00 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48539785,"opsSec":97079526.70253108},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47975440,"opsSec":95940733.11618416},{"name":"Using + - small number (2 len)","samples":48403008,"opsSec":96802214.18983991},{"name":"Using + - big number (10 len)","samples":48605802,"opsSec":97209005.4088674}]}-->
