## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|817,438|89|
|fromUnixToISOString(new Date())|1,317,288|87|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:02 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":817437.8556480674,"samples":3},{"name":"fromUnixToISOString(new Date())","opsSec":1317287.6916279485,"samples":4}]}-->
