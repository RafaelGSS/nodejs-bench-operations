## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,282,509|641255|
|fromUnixToISOString(new Date())|1,846,177|923089|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:59:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1282509.1407184834,"samples":641255},{"name":"fromUnixToISOString(new Date())","opsSec":1846177.531071808,"samples":923089}]}-->
