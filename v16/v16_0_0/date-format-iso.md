## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,462,383|96|
|fromUnixToISOString(new Date())|1,987,538|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 17:13:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2462382.7760356157,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1987538.333035134,"samples":7}]}-->
