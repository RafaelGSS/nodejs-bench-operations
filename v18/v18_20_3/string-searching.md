## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|8,283,220|4141612|
|Using indexof|8,431,745|4215873|
|Using RegExp.test|7,749,479|3874740|
|Using RegExp.text with cached regex pattern|7,597,411|3798706|
|Using new RegExp.test|3,077,329|1538665|
|Using new RegExp.test with cached regex pattern|3,413,078|1706540|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:52:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":8283220.61265962,"samples":4141612},{"name":"Using indexof","opsSec":8431745.944277415,"samples":4215873},{"name":"Using RegExp.test","opsSec":7749479.921302937,"samples":3874740},{"name":"Using RegExp.text with cached regex pattern","opsSec":7597411.697332379,"samples":3798706},{"name":"Using new RegExp.test","opsSec":3077329.3705606223,"samples":1538665},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3413078.892752222,"samples":1706540}]}-->
