## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,585,569|89|
|fromUnixToISOString(new Date())|1,285,374|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:09:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1585569.390133239,"samples":6},{"name":"fromUnixToISOString(new Date())","opsSec":1285374.2044676389,"samples":6}]}-->
