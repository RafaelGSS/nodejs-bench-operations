## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|648,850|88|
|Using brackets {}|654,206|91|
|Using '' + |659,233|93|
|Using date.toString()|707,167|85|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:14:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using String()","opsSec":648850.254240718,"samples":5},{"name":"Using brackets {}","opsSec":654205.528078814,"samples":5},{"name":"Using '' + ","opsSec":659233.1901111603,"samples":5},{"name":"Using date.toString()","opsSec":707166.657784722,"samples":4}]}-->
