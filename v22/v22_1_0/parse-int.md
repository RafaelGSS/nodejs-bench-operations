## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|16,110,175|8055088|
|Using parseInt(x, 10) - big number (10 len)|16,133,246|8066624|
|Using + - small number (2 len)|16,250,559|8125280|
|Using + - big number (10 len)|16,076,609|8038306|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:11:59 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":16110175.742247205,"samples":8055088},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":16133246.612544432,"samples":8066624},{"name":"Using + - small number (2 len)","opsSec":16250559.057368174,"samples":8125280},{"name":"Using + - big number (10 len)","opsSec":16076609.81357506,"samples":8038306}]}-->
