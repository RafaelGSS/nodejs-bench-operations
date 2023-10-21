## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,418,794|80|
|fromUnixToISOString(new Date())|1,175,577|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:38:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1418793.5923473518,"samples":6},{"name":"fromUnixToISOString(new Date())","opsSec":1175577.4846759457,"samples":6}]}-->
