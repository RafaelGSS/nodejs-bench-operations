## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,272,666|636334|
|fromUnixToISOString(new Date())|1,862,677|931339|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:59:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1272666.6630017834,"samples":636334},{"name":"fromUnixToISOString(new Date())","opsSec":1862677.2626031747,"samples":931339}]}-->
