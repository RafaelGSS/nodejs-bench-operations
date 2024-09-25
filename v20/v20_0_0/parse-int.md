## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,126,569|7063285|
|Using parseInt(x, 10) - big number (10 len)|14,323,089|7161545|
|Using + - small number (2 len)|14,264,257|7132129|
|Using + - big number (10 len)|14,223,212|7111607|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:22:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14126569.38201791,"samples":7063285},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14323089.823012616,"samples":7161545},{"name":"Using + - small number (2 len)","opsSec":14264257.234433644,"samples":7132129},{"name":"Using + - big number (10 len)","opsSec":14223212.784722356,"samples":7111607}]}-->
