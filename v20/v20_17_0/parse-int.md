## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|133,841,294|66938038|
|Using parseInt(x, 10) - big number (10 len)|97,431,048|48715525|
|Using + - small number (2 len)|94,518,863|47259433|
|Using + - big number (10 len)|97,921,898|48960954|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 20:16:58 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":133841294.39514294,"samples":66938038},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":97431048.24624114,"samples":48715525},{"name":"Using + - small number (2 len)","opsSec":94518863.35347182,"samples":47259433},{"name":"Using + - big number (10 len)","opsSec":97921898.0119664,"samples":48960954}]}-->
