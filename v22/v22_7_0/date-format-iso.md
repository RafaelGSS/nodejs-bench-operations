## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,289,283|644642|
|fromUnixToISOString(new Date())|1,565,596|782799|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:01:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1289283.4739723005,"samples":644642},{"name":"fromUnixToISOString(new Date())","opsSec":1565596.6285371738,"samples":782799}]}-->
