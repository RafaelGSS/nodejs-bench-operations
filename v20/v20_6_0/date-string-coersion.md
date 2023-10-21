## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|599,006|91|
|Using brackets {}|604,815|93|
|Using '' + |607,423|87|
|Using date.toString()|669,508|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"Using String()","opsSec":599005.7628800211,"samples":5},{"name":"Using brackets {}","opsSec":604815.0798930395,"samples":4},{"name":"Using '' + ","opsSec":607423.1946196813,"samples":5},{"name":"Using date.toString()","opsSec":669508.2092696779,"samples":5}]}-->
