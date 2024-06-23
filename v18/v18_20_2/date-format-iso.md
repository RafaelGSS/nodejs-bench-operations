## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,083,740|1041871|
|fromUnixToISOString(new Date())|1,903,771|951886|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:07:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2083740.6827718546,"samples":1041871},{"name":"fromUnixToISOString(new Date())","opsSec":1903771.7638161436,"samples":951886}]}-->
