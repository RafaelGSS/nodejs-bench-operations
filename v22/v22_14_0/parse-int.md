## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|95,855,190|47932660|
|Using parseInt(x, 10) - big number (10 len)|95,977,128|47988571|
|Using + - small number (2 len)|95,671,669|47843936|
|Using + - big number (10 len)|94,092,196|47048864|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:08:44 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.14.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":47932660,"opsSec":95855190.98196894},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":47988571,"opsSec":95977128.563202},{"name":"Using + - small number (2 len)","samples":47843936,"opsSec":95671669.42875223},{"name":"Using + - big number (10 len)","samples":47048864,"opsSec":94092196.69612502}]}-->
