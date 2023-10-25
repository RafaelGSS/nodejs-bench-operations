## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|956,218|97|
|fromUnixToISOString(new Date())|1,549,726|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":956218.4280724992,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1549726.1009184343,"samples":5}]}-->
