## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,168,935|1084468|
|fromUnixToISOString(new Date())|1,970,003|985002|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:07:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2168935.9006715743,"samples":1084468},{"name":"fromUnixToISOString(new Date())","opsSec":1970003.6018259865,"samples":985002}]}-->
