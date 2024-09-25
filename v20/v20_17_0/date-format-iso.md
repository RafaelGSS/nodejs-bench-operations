## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,278,324|639163|
|fromUnixToISOString(new Date())|1,779,199|889600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:34:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1278324.9364337265,"samples":639163},{"name":"fromUnixToISOString(new Date())","opsSec":1779199.2705278224,"samples":889600}]}-->
