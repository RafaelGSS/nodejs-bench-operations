## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|142,155,753|71077900|
|Using parseInt(x, 10) - big number (10 len)|89,211,357|44666124|
|Using + - small number (2 len)|99,812,366|49939813|
|Using + - big number (10 len)|98,944,329|49488636|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 18:29:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":142155753.94153574,"samples":71077900},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":89211357.86737663,"samples":44666124},{"name":"Using + - small number (2 len)","opsSec":99812366.03977099,"samples":49939813},{"name":"Using + - big number (10 len)","opsSec":98944329.07929903,"samples":49488636}]}-->
