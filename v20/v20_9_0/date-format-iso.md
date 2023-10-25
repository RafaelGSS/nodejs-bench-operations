## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|941,237|89|
|fromUnixToISOString(new Date())|1,582,400|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":941237.3904853762,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1582399.6268295483,"samples":10}]}-->
