## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|996,445|97|
|Using brackets {}|951,991|97|
|Using '' + |997,822|95|
|Using date.toString()|1,096,211|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:24:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":996445.4944288247,"samples":7},{"name":"Using brackets {}","opsSec":951990.8655750658,"samples":3},{"name":"Using '' + ","opsSec":997822.4477765108,"samples":6},{"name":"Using date.toString()","opsSec":1096211.4712642503,"samples":6}]}-->
