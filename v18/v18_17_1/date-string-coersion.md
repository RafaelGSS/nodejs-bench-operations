## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,021,372|98|
|Using brackets {}|1,053,909|96|
|Using '' + |1,020,180|94|
|Using date.toString()|1,133,160|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:24:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using String()","opsSec":1021372.4312051972,"samples":6},{"name":"Using brackets {}","opsSec":1053908.5735699637,"samples":4},{"name":"Using '' + ","opsSec":1020180.082876438,"samples":6},{"name":"Using date.toString()","opsSec":1133159.625870271,"samples":4}]}-->
