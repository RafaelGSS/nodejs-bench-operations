## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,070,745|95|
|Using brackets {}|1,102,085|99|
|Using '' + |1,092,398|98|
|Using date.toString()|1,201,451|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:27:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1070745.2662850157,"samples":5},{"name":"Using brackets {}","opsSec":1102084.5056902706,"samples":5},{"name":"Using '' + ","opsSec":1092397.8571778508,"samples":5},{"name":"Using date.toString()","opsSec":1201450.892540683,"samples":5}]}-->
