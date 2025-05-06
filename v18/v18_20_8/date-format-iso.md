## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,487,826|1243914|
|fromUnixToISOString(new Date())|2,012,628|1006315|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:29:24 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":1243914,"opsSec":2487826.054520025},{"name":"fromUnixToISOString(new Date())","samples":1006315,"opsSec":2012628.8085237455}]}-->
