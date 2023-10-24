## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,377,495|92|
|fromUnixToISOString(new Date())|1,115,384|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1377495.0961296447,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1115383.9137975923,"samples":7}]}-->
