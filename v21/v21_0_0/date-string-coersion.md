## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,070,729|95|
|Using brackets {}|1,087,693|100|
|Using '' + |1,086,979|96|
|Using date.toString()|1,183,637|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:28:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1070728.5516800648,"samples":4},{"name":"Using brackets {}","opsSec":1087692.9664279437,"samples":4},{"name":"Using '' + ","opsSec":1086978.956124584,"samples":4},{"name":"Using date.toString()","opsSec":1183636.7486195168,"samples":5}]}-->
