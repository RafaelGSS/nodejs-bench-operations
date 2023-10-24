## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|726,377|87|
|fromUnixToISOString(new Date())|1,169,566|79|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":726377.3975779304,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1169565.8914565938,"samples":5}]}-->
