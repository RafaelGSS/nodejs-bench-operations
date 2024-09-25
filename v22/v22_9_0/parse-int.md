## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,453,462|7226732|
|Using parseInt(x, 10) - big number (10 len)|14,156,415|7078208|
|Using + - small number (2 len)|14,533,943|7266972|
|Using + - big number (10 len)|14,461,447|7230724|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:29:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14453462.554593626,"samples":7226732},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14156415.54703853,"samples":7078208},{"name":"Using + - small number (2 len)","opsSec":14533943.854681768,"samples":7266972},{"name":"Using + - big number (10 len)","opsSec":14461447.855309501,"samples":7230724}]}-->
