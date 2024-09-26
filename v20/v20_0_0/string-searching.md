## String searching

|name|ops/sec|samples|
|-|-|-|
|Using includes|7,783,575|3891788|
|Using indexof|7,959,196|3979599|
|Using RegExp.test|7,250,042|3625022|
|Using RegExp.text with cached regex pattern|7,258,144|3629073|
|Using new RegExp.test|3,191,626|1595814|
|Using new RegExp.test with cached regex pattern|3,587,357|1793679|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:53:40 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using includes","opsSec":7783575.134931041,"samples":3891788},{"name":"Using indexof","opsSec":7959196.284373375,"samples":3979599},{"name":"Using RegExp.test","opsSec":7250042.290739297,"samples":3625022},{"name":"Using RegExp.text with cached regex pattern","opsSec":7258144.775687831,"samples":3629073},{"name":"Using new RegExp.test","opsSec":3191626.358265431,"samples":1595814},{"name":"Using new RegExp.test with cached regex pattern","opsSec":3587357.808601519,"samples":1793679}]}-->
