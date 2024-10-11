## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,374,137|687136|
|fromUnixToISOString(new Date())|1,994,792|997499|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:07:07 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.9.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1374137.790710257,"samples":687136},{"name":"fromUnixToISOString(new Date())","opsSec":1994792.3329208912,"samples":997499}]}-->
