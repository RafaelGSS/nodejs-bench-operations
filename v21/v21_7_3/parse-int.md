## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|15,340,341|7670171|
|Using parseInt(x, 10) - big number (10 len)|15,139,219|7569610|
|Using + - small number (2 len)|14,873,006|7436504|
|Using + - big number (10 len)|15,243,831|7621916|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:47:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":15340341.601236034,"samples":7670171},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":15139219.636792881,"samples":7569610},{"name":"Using + - small number (2 len)","opsSec":14873006.45307067,"samples":7436504},{"name":"Using + - big number (10 len)","opsSec":15243831.786484463,"samples":7621916}]}-->
