## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,786,080|3393041|
|Date.now()|10,035,729|5017865|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:29:09 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6786080.493481276,"samples":3393041},{"name":"Date.now()","opsSec":10035729.558437023,"samples":5017865}]}-->
