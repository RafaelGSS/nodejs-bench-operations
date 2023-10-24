## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,722,488|90|
|Date.now()|12,649,009|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 18:01:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":6722488.370965943,"samples":6},{"name":"Date.now()","opsSec":12649009.342064051,"samples":6}]}-->
