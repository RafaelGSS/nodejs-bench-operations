## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,491,228|99|
|fromUnixToISOString(new Date())|2,212,455|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 19:03:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1491228.4480469646,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2212454.900233239,"samples":4}]}-->
