## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,327,206|663604|
|fromUnixToISOString(new Date())|1,835,718|917860|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:08:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1327206.7048360158,"samples":663604},{"name":"fromUnixToISOString(new Date())","opsSec":1835718.2127431065,"samples":917860}]}-->
