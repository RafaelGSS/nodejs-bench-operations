## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|96,244,985|48123359|
|Using parseInt(x, 10) - big number (10 len)|14,891,047|7447371|
|Using + - small number (2 len)|105,350,215|52675117|
|Using + - big number (10 len)|106,403,677|53202733|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 19:10:35 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":48123359,"opsSec":96244985.7827459},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":7447371,"opsSec":14891047.59065695},{"name":"Using + - small number (2 len)","samples":52675117,"opsSec":105350215.45836209},{"name":"Using + - big number (10 len)","samples":53202733,"opsSec":106403677.14137991}]}-->
