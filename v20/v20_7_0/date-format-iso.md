## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|833,249|91|
|fromUnixToISOString(new Date())|1,397,593|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:38:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":833248.7232454087,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1397592.543552565,"samples":5}]}-->
