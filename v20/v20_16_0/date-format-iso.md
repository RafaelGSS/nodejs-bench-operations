## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,295,988|647995|
|fromUnixToISOString(new Date())|1,878,000|939001|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:58:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1295988.0456500752,"samples":647995},{"name":"fromUnixToISOString(new Date())","opsSec":1878000.354870427,"samples":939001}]}-->
