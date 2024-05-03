## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,623,902|91|
|fromUnixToISOString(new Date())|2,372,435|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 03 2024 18:33:25 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1623901.7832623746,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2372435.3703514826,"samples":5}]}-->
