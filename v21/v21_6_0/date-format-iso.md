## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,484,413|92|
|fromUnixToISOString(new Date())|2,223,902|93|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1484412.9358801043,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2223901.9911191245,"samples":9}]}-->
