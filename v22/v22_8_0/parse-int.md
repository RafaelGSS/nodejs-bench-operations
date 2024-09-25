## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,815,103|7407552|
|Using parseInt(x, 10) - big number (10 len)|15,271,351|7635676|
|Using + - small number (2 len)|14,836,862|7418435|
|Using + - big number (10 len)|15,435,719|7717860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:28:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14815103.496370388,"samples":7407552},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15271351.205824688,"samples":7635676},{"name":"Using + - small number (2 len)","opsSec":14836862.84862591,"samples":7418435},{"name":"Using + - big number (10 len)","opsSec":15435719.44394621,"samples":7717860}]}-->
