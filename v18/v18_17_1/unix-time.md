## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,127,931|91|
|Date.now()|12,510,769|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 14:16:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().getTime()","opsSec":6127931.319214611,"samples":5},{"name":"Date.now()","opsSec":12510768.762470616,"samples":6}]}-->
