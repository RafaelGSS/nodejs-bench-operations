## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,521,254|8260628|
|Using parseInt(x, 10) - big number (10 len)|16,803,035|8401518|
|Using + - small number (2 len)|17,440,724|8720364|
|Using + - big number (10 len)|17,651,451|8825733|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:24:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16521254.24876563,"samples":8260628},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16803035.529463377,"samples":8401518},{"name":"Using + - small number (2 len)","opsSec":17440724.02336739,"samples":8720364},{"name":"Using + - big number (10 len)","opsSec":17651451.1726807,"samples":8825733}]}-->
