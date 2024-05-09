## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,045,844|522923|
|Using brackets {}|1,066,987|533494|
|Using '' + |1,065,281|532641|
|Using date.toString()|1,160,235|580118|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Thu May 09 2024 21:17:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using String()","opsSec":1045844.6236684086,"samples":522923},{"name":"Using brackets {}","opsSec":1066987.6052147849,"samples":533494},{"name":"Using '' + ","opsSec":1065281.5909313469,"samples":532641},{"name":"Using date.toString()","opsSec":1160235.5034188696,"samples":580118}]}-->
