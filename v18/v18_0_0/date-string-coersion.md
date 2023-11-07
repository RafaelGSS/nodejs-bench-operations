## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|995,155|96|
|Using brackets {}|1,017,932|96|
|Using '' + |1,011,409|97|
|Using date.toString()|1,120,095|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:23:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":995154.9231939685,"samples":6},{"name":"Using brackets {}","opsSec":1017932.0398728173,"samples":5},{"name":"Using '' + ","opsSec":1011408.6893305867,"samples":7},{"name":"Using date.toString()","opsSec":1120095.005792838,"samples":5}]}-->
