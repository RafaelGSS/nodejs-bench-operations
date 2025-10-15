## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|100,833,849|50440171|
|Using parseInt(x, 10) - big number (10 len)|102,532,759|51286585|
|Using + - small number (2 len)|101,614,953|50807485|
|Using + - big number (10 len)|102,044,894|51022453|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 21:58:09 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":50440171,"opsSec":100833849.73023407},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":51286585,"opsSec":102532759.58372733},{"name":"Using + - small number (2 len)","samples":50807485,"opsSec":101614953.94483727},{"name":"Using + - big number (10 len)","samples":51022453,"opsSec":102044894.77506158}]}-->
