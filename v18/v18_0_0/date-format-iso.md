## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,680,804|93|
|fromUnixToISOString(new Date())|1,401,678|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1680803.823856562,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1401678.103160063,"samples":7}]}-->
