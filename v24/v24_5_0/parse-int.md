## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|94,625,002|47312518|
|Using parseInt(x, 10) - big number (10 len)|96,673,338|48339035|
|Using + - small number (2 len)|89,451,116|44725624|
|Using + - big number (10 len)|95,836,570|47919091|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:31:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.5.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47312518,"opsSec":94625002.69199905},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":48339035,"opsSec":96673338.80679879},{"name":"Using + - small number (2 len)","samples":44725624,"opsSec":89451116.1490548},{"name":"Using + - big number (10 len)","samples":47919091,"opsSec":95836570.02889211}]}-->
