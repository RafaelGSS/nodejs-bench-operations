## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,356,650|678326|
|fromUnixToISOString(new Date())|1,930,408|965205|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:09:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1356650.4588450908,"samples":678326},{"name":"fromUnixToISOString(new Date())","opsSec":1930408.3745955448,"samples":965205}]}-->
