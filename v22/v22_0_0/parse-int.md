## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|91,021,958|45510993|
|Using parseInt(x, 10) - big number (10 len)|90,877,800|45560025|
|Using + - small number (2 len)|91,838,153|45919869|
|Using + - big number (10 len)|90,669,952|45340409|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 18:33:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":45510993,"opsSec":91021958.87545626},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":45560025,"opsSec":90877800.68183447},{"name":"Using + - small number (2 len)","samples":45919869,"opsSec":91838153.05715454},{"name":"Using + - big number (10 len)","samples":45340409,"opsSec":90669952.65689331}]}-->
