## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|127,631,670|94|
|Using parseInt(x, 10) - big number (10 len)|10,699,069|95|
|Using + - small number (2 len)|588,976,785|96|
|Using + - big number (10 len)|587,139,426|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":127631669.55632302,"samples":5},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":10699068.867558941,"samples":6},{"name":"Using + - small number (2 len)","opsSec":588976785.3078034,"samples":7},{"name":"Using + - big number (10 len)","opsSec":587139425.6872866,"samples":10}]}-->
