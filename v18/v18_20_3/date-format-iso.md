## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,963,850|981926|
|fromUnixToISOString(new Date())|1,788,397|894199|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:57:38 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1963850.1455955743,"samples":981926},{"name":"fromUnixToISOString(new Date())","opsSec":1788397.7065273228,"samples":894199}]}-->
