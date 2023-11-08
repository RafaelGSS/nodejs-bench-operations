## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|12,218,475|93|
|Date.now()|25,403,805|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Nov 08 2023 00:16:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().getTime()","opsSec":12218475.19811108,"samples":5},{"name":"Date.now()","opsSec":25403805.145554494,"samples":5}]}-->
