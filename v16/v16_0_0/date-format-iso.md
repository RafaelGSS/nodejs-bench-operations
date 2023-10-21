## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,322,490|89|
|fromUnixToISOString(new Date())|1,059,677|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 12:37:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1322489.7319468816,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1059677.177156965,"samples":6}]}-->
