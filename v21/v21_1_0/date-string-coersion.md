## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,073,970|95|
|Using brackets {}|1,080,332|100|
|Using '' + |1,077,820|96|
|Using date.toString()|1,176,553|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:29:32 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1073969.966381368,"samples":5},{"name":"Using brackets {}","opsSec":1080332.2800742735,"samples":4},{"name":"Using '' + ","opsSec":1077820.0565738846,"samples":6},{"name":"Using date.toString()","opsSec":1176553.4432804044,"samples":6}]}-->
