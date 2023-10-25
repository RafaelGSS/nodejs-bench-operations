## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|803,305|92|
|fromUnixToISOString(new Date())|1,357,057|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:16 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":803305.1361582576,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1357057.4485603785,"samples":6}]}-->
