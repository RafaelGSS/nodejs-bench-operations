## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,584,883|98|
|fromUnixToISOString(new Date())|2,127,369|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:00:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2584883.048689806,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2127369.4812063426,"samples":7}]}-->
