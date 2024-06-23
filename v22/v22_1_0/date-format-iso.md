## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,372,093|686047|
|fromUnixToISOString(new Date())|1,991,038|995520|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:09:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1372093.3523721131,"samples":686047},{"name":"fromUnixToISOString(new Date())","opsSec":1991038.5624688843,"samples":995520}]}-->
