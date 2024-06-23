## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,289,981|644991|
|fromUnixToISOString(new Date())|1,977,570|988786|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Sun Jun 23 2024 23:10:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1289981.5046469865,"samples":644991},{"name":"fromUnixToISOString(new Date())","opsSec":1977570.6512974321,"samples":988786}]}-->
