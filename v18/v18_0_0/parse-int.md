## Parsing Integer

|name|ops/sec|samples|
|-|-|-|
|Using parseInt(x, 10) - small number (2 len)|19,708,530|9854266|
|Using parseInt(x, 10) - big number (10 len)|9,742,792|4871397|
|Using + - small number (2 len)|21,062,563|10531282|
|Using + - big number (10 len)|21,024,645|10512323|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:07:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using parseInt(x, 10) - small number (2 len)","opsSec":19708530.76089069,"samples":9854266},{"name":"Using parseInt(x, 10) - big number (10 len)","opsSec":9742792.54757562,"samples":4871397},{"name":"Using + - small number (2 len)","opsSec":21062563.85421358,"samples":10531282},{"name":"Using + - big number (10 len)","opsSec":21024645.253426053,"samples":10512323}]}-->
