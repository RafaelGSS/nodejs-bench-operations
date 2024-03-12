## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,042,253|95|
|Using brackets {}|1,074,238|96|
|Using '' + |1,059,387|94|
|Using date.toString()|1,212,100|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:43:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"Using String()","opsSec":1042253.2491698917,"samples":6},{"name":"Using brackets {}","opsSec":1074237.58362313,"samples":6},{"name":"Using '' + ","opsSec":1059387.0575678695,"samples":4},{"name":"Using date.toString()","opsSec":1212099.7526765424,"samples":6}]}-->
