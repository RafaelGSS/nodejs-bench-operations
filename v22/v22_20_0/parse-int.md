## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|98,651,424|49325719|
|Using parseInt(x, 10) - big number (10 len)|98,447,911|49225485|
|Using + - small number (2 len)|98,448,163|49224087|
|Using + - big number (10 len)|98,217,362|49110750|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 22:00:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.20.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49325719,"opsSec":98651424.78070909},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49225485,"opsSec":98447911.02650857},{"name":"Using + - small number (2 len)","samples":49224087,"opsSec":98448163.95828727},{"name":"Using + - big number (10 len)","samples":49110750,"opsSec":98217362.88824043}]}-->
