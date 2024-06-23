## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,210,794|1105398|
|fromUnixToISOString(new Date())|2,083,341|1041671|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:07:27 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2210794.160579515,"samples":1105398},{"name":"fromUnixToISOString(new Date())","opsSec":2083341.6670101022,"samples":1041671}]}-->
