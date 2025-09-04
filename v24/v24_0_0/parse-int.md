## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|87,274,339|44159749|
|Using parseInt(x, 10) - big number (10 len)|95,078,737|47539396|
|Using + - small number (2 len)|85,949,913|42974962|
|Using + - big number (10 len)|89,765,829|44883121|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:34:46 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":44159749,"opsSec":87274339.4352785},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47539396,"opsSec":95078737.42480472},{"name":"Using + - small number (2 len)","samples":42974962,"opsSec":85949913.34221074},{"name":"Using + - big number (10 len)","samples":44883121,"opsSec":89765829.79530957}]}-->
