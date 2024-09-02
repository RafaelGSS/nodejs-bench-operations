## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,846,859|7423430|
|Using parseInt(x, 10) - big number (10 len)|8,134,980|4067491|
|Using + - small number (2 len)|15,387,640|7693821|
|Using + - big number (10 len)|14,716,169|7358085|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:42:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14846859.710789958,"samples":7423430},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":8134980.683179988,"samples":4067491},{"name":"Using + - small number (2 len)","opsSec":15387640.82630279,"samples":7693821},{"name":"Using + - big number (10 len)","opsSec":14716169.20826064,"samples":7358085}]}-->
