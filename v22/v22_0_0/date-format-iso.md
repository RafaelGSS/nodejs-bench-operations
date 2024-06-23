## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,351,891|675946|
|fromUnixToISOString(new Date())|2,012,034|1006018|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:09:28 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1351891.1456045606,"samples":675946},{"name":"fromUnixToISOString(new Date())","opsSec":2012034.4789022636,"samples":1006018}]}-->
