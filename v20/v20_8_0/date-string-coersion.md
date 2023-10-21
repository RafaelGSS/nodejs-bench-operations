## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|695,382|94|
|Using brackets {}|704,913|97|
|Using '' + |711,340|92|
|Using date.toString()|770,662|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:43:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":695382.1095053023,"samples":5},{"name":"Using brackets {}","opsSec":704912.642720235,"samples":3},{"name":"Using '' + ","opsSec":711340.4802767121,"samples":5},{"name":"Using date.toString()","opsSec":770662.1511189259,"samples":4}]}-->
