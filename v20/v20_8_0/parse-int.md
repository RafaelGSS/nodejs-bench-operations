## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|677,495,013|88|
|Using parseInt(x, 10) - big number (10 len)|695,118,827|92|
|Using + - small number (2 len)|690,454,138|89|
|Using + - big number (10 len)|688,023,547|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":677495012.5458736,"samples":7},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":695118826.8050205,"samples":6},{"name":"Using + - small number (2 len)","opsSec":690454138.2484055,"samples":6},{"name":"Using + - big number (10 len)","opsSec":688023547.2805647,"samples":7}]}-->
