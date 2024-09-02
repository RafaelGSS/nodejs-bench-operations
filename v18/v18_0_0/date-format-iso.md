## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,048,171|1024086|
|fromUnixToISOString(new Date())|1,778,880|889441|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:57:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2048171.0658437614,"samples":1024086},{"name":"fromUnixToISOString(new Date())","opsSec":1778880.3958526712,"samples":889441}]}-->
