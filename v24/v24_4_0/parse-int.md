## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|90,875,631|45437825|
|Using parseInt(x, 10) - big number (10 len)|95,367,825|47683923|
|Using + - small number (2 len)|95,047,928|47523976|
|Using + - big number (10 len)|95,426,018|47713021|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Aug 05 2025 14:31:22 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v24.4.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":45437825,"opsSec":90875631.6431224},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47683923,"opsSec":95367825.59128533},{"name":"Using + - small number (2 len)","samples":47523976,"opsSec":95047928.42811374},{"name":"Using + - big number (10 len)","samples":47713021,"opsSec":95426018.14349546}]}-->
