## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,722,311|86|
|Date.now()|14,303,761|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":6722310.676355465,"samples":6},{"name":"Date.now()","opsSec":14303760.729479246,"samples":5}]}-->
