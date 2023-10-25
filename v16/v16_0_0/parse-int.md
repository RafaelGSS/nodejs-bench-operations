## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|137,143,385|84|
|Using parseInt(x, 10) - big number (10 len)|9,220,397|86|
|Using + - small number (2 len)|612,211,491|89|
|Using + - big number (10 len)|615,856,763|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:15:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":137143385.12864187,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":9220397.387174523,"samples":7},{"name":"Using + - small number (2 len)","opsSec":612211491.3404117,"samples":6},{"name":"Using + - big number (10 len)","opsSec":615856763.0827967,"samples":7}]}-->
