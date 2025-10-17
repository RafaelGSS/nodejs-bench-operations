## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|92,684,044|46342809|
|Using parseInt(x, 10) - big number (10 len)|95,137,032|47569513|
|Using + - small number (2 len)|90,743,827|45377031|
|Using + - big number (10 len)|83,022,306|41516891|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:33:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46342809,"opsSec":92684044.03956412},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47569513,"opsSec":95137032.30835095},{"name":"Using + - small number (2 len)","samples":45377031,"opsSec":90743827.18521944},{"name":"Using + - big number (10 len)","samples":41516891,"opsSec":83022306.98881723}]}-->
