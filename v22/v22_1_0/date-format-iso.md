## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,405,381|702691|
|fromUnixToISOString(new Date())|2,048,490|1024246|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon May 13 2024 19:28:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1405381.6430327094,"samples":702691},{"name":"fromUnixToISOString(new Date())","opsSec":2048490.3653042095,"samples":1024246}]}-->
