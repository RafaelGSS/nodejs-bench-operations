## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|738,521|92|
|fromUnixToISOString(new Date())|1,242,688|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":738521.492770016,"samples":3},{"name":"fromUnixToISOString(new Date())","opsSec":1242688.4686763887,"samples":7}]}-->
