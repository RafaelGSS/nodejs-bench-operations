## Getting unix time

|name|ops/sec|samples|
|-|-|-|
|new Date().getTime()|8,300,524|4161303|
|Date.now()|16,356,681|8193555|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:45:31 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().getTime()","opsSec":8300524.827646147,"samples":4161303},{"name":"Date.now()","opsSec":16356681.828361517,"samples":8193555}]}-->
