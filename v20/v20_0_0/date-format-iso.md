## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,475,527|749141|
|fromUnixToISOString(new Date())|2,083,339|1042035|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 18:29:39 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"new Date().toISOString()","samples":749141,"opsSec":1475527.8002123134},{"name":"fromUnixToISOString(new Date())","samples":1042035,"opsSec":2083339.7602472769}]}-->
