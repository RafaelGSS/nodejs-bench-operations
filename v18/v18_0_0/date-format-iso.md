## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,554,390|96|
|fromUnixToISOString(new Date())|1,362,522|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1554390.020361357,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1362521.730559692,"samples":8}]}-->
