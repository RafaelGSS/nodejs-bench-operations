## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,381,414|93|
|Date.now()|14,022,907|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().getTime()","opsSec":7381413.813634522,"samples":6},{"name":"Date.now()","opsSec":14022906.700828476,"samples":7}]}-->
