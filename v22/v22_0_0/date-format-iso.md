## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,193,556|596779|
|fromUnixToISOString(new Date())|1,803,398|901700|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:22:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1193556.3194727022,"samples":596779},{"name":"fromUnixToISOString(new Date())","opsSec":1803398.9864897695,"samples":901700}]}-->
