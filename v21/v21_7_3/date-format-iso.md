## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,510,585|755302|
|fromUnixToISOString(new Date())|2,097,247|1048784|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:21:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1510585.7188916302,"samples":755302},{"name":"fromUnixToISOString(new Date())","opsSec":2097247.0247318526,"samples":1048784}]}-->
