## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,453,929|727098|
|fromUnixToISOString(new Date())|2,037,640|1018903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:52:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1453929.3348207006,"samples":727098},{"name":"fromUnixToISOString(new Date())","opsSec":2037640.3113157258,"samples":1018903}]}-->
