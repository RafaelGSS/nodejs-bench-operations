## Date String coersion

|name|ops/sec|samples|
|-|-|-|
|Using String()|1,119,395|90|
|Using brackets {}|1,151,127|94|
|Using '' + |1,154,433|96|
|Using date.toString()|1,293,793|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:42:54 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using String()","opsSec":1119395.0520366258,"samples":4},{"name":"Using brackets {}","opsSec":1151126.6057682394,"samples":4},{"name":"Using '' + ","opsSec":1154433.2969477058,"samples":6},{"name":"Using date.toString()","opsSec":1293793.0370958813,"samples":5}]}-->
