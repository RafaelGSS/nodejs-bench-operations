## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,492,315|100|
|fromUnixToISOString(new Date())|2,153,749|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:04:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1492314.654605094,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2153749.2021152414,"samples":6}]}-->
