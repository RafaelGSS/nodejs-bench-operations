## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,047,497|523940|
|Using brackets {}|1,052,960|532550|
|Using '' + |1,034,777|517389|
|Using date.toString()|1,172,018|586032|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:32:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"Using String()","opsSec":1047497.9753933782,"samples":523940},{"name":"Using brackets {}","opsSec":1052960.277755163,"samples":532550},{"name":"Using '' + ","opsSec":1034777.7247491252,"samples":517389},{"name":"Using date.toString()","opsSec":1172018.0029814548,"samples":586032}]}-->
