## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,419,461|709845|
|fromUnixToISOString(new Date())|1,987,264|993651|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:08:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1419461.0664802757,"samples":709845},{"name":"fromUnixToISOString(new Date())","opsSec":1987264.9017388143,"samples":993651}]}-->
