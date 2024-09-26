## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,053,726|3026864|
|Date.now()|8,814,235|4407118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:32:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6053726.631853123,"samples":3026864},{"name":"Date.now()","opsSec":8814235.559294535,"samples":4407118}]}-->
