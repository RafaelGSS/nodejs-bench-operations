## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,514,192|3257097|
|Date.now()|9,090,269|4545135|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:44:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().getTime()","opsSec":6514192.496594826,"samples":3257097},{"name":"Date.now()","opsSec":9090269.778936502,"samples":4545135}]}-->
