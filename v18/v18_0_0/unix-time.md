## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|6,110,983|3055492|
|Date.now()|9,434,248|4717125|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:28:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().getTime()","opsSec":6110983.773122131,"samples":3055492},{"name":"Date.now()","opsSec":9434248.374740101,"samples":4717125}]}-->
