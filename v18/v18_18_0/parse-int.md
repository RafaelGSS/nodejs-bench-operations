## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|129,968,406|83|
|Using parseInt(x, 10) - big number (10 len)|11,954,708|90|
|Using + - small number (2 len)|599,707,592|92|
|Using + - big number (10 len)|591,269,704|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:05:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":129968406.28584336,"samples":6},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":11954708.220006684,"samples":8},{"name":"Using + - small number (2 len)","opsSec":599707591.8495234,"samples":7},{"name":"Using + - big number (10 len)","opsSec":591269704.0287939,"samples":9}]}-->
