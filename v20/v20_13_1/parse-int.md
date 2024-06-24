## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|20,062,750|10031376|
|Using parseInt(x, 10) - big number (10 len)|20,038,966|10019484|
|Using + - small number (2 len)|19,933,276|9966639|
|Using + - big number (10 len)|20,021,408|10010705|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:10:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":20062750.876461692,"samples":10031376},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":20038966.276584893,"samples":10019484},{"name":"Using + - small number (2 len)","opsSec":19933276.405225962,"samples":9966639},{"name":"Using + - big number (10 len)","opsSec":20021408.31811329,"samples":10010705}]}-->
