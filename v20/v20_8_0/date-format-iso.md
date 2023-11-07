## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,454,549|98|
|fromUnixToISOString(new Date())|2,243,153|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:04:31 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1454548.5730179546,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2243152.755591175,"samples":6}]}-->
