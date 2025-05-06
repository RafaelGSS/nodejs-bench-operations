## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|92,088,173|46044102|
|Using parseInt(x, 10) - big number (10 len)|16,734,237|8370457|
|Using + - small number (2 len)|103,515,027|51786620|
|Using + - big number (10 len)|102,599,512|51305646|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:08:28 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":46044102,"opsSec":92088173.42672643},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":8370457,"opsSec":16734237.240152027},{"name":"Using + - small number (2 len)","samples":51786620,"opsSec":103515027.4961673},{"name":"Using + - big number (10 len)","samples":51305646,"opsSec":102599512.1396132}]}-->
