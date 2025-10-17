## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|98,187,149|49093580|
|Using parseInt(x, 10) - big number (10 len)|98,337,856|49205677|
|Using + - small number (2 len)|98,239,841|49119928|
|Using + - big number (10 len)|94,367,110|47194003|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:36:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.17.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","samples":49093580,"opsSec":98187149.59216213},{"name":"Using parseInt(x, 10) - big number (10 len)","samples":49205677,"opsSec":98337856.08968286},{"name":"Using + - small number (2 len)","samples":49119928,"opsSec":98239841.85346279},{"name":"Using + - big number (10 len)","samples":47194003,"opsSec":94367110.85684563}]}-->
