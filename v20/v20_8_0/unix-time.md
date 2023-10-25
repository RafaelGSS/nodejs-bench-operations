## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,219,224|93|
|Date.now()|12,361,193|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 05:17:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":6219224.483932493,"samples":8},{"name":"Date.now()","opsSec":12361193.444597272,"samples":6}]}-->
