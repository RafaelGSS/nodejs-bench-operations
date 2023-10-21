## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|7,315,279|96|
|Date.now()|13,747,111|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":7315279.484512642,"samples":8},{"name":"Date.now()","opsSec":13747111.101360524,"samples":6}]}-->
