## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|780,759|93|
|fromUnixToISOString(new Date())|1,344,240|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":780758.8526696538,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1344240.1187290414,"samples":5}]}-->
