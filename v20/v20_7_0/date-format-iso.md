## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,079,499|98|
|fromUnixToISOString(new Date())|1,612,949|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1079499.490225639,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1612949.4240480254,"samples":7}]}-->
