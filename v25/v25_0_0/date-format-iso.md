## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,390,608|695513|
|fromUnixToISOString(new Date())|2,576,838|1288548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 16:03:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v25.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"new Date().toISOString()","samples":695513,"opsSec":1390608.7339432929},{"name":"fromUnixToISOString(new Date())","samples":1288548,"opsSec":2576838.1924925176}]}-->
