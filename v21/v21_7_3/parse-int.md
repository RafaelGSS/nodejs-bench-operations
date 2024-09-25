## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|14,264,265|7132133|
|Using parseInt(x, 10) - big number (10 len)|14,943,228|7471615|
|Using + - small number (2 len)|14,289,379|7144690|
|Using + - big number (10 len)|14,855,378|7427696|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:26:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":14264265.457825506,"samples":7132133},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":14943228.385966176,"samples":7471615},{"name":"Using + - small number (2 len)","opsSec":14289379.3713118,"samples":7144690},{"name":"Using + - big number (10 len)","opsSec":14855378.362657959,"samples":7427696}]}-->
