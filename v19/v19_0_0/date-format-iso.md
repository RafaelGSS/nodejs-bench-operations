## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|997,146|93|
|fromUnixToISOString(new Date())|1,532,025|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":997146.1766560191,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1532025.4330772706,"samples":6}]}-->
