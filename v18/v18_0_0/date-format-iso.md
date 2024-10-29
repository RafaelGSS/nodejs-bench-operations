## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,622,344|1311176|
|fromUnixToISOString(new Date())|2,103,159|1054023|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:19:30 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2622344.3584885392,"samples":1311176},{"name":"fromUnixToISOString(new Date())","opsSec":2103159.846505565,"samples":1054023}]}-->
