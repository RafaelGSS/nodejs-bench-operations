## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,246,070|623036|
|fromUnixToISOString(new Date())|1,747,751|873876|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:58:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1246070.5229074892,"samples":623036},{"name":"fromUnixToISOString(new Date())","opsSec":1747751.3216947853,"samples":873876}]}-->
