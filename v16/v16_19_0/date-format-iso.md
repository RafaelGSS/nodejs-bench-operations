## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,670,588|96|
|fromUnixToISOString(new Date())|1,444,131|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1670587.8840917929,"samples":8},{"name":"fromUnixToISOString(new Date())","opsSec":1444131.20828284,"samples":7}]}-->
