## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|854,932|90|
|fromUnixToISOString(new Date())|1,384,771|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":854932.2441422401,"samples":7},{"name":"fromUnixToISOString(new Date())","opsSec":1384771.2319938762,"samples":6}]}-->
