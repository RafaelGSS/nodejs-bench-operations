## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,352,894|676805|
|fromUnixToISOString(new Date())|1,728,419|864235|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 30 2024 21:08:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1352894.072808763,"samples":676805},{"name":"fromUnixToISOString(new Date())","opsSec":1728419.7202703373,"samples":864235}]}-->
