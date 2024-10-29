## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,498,009|749086|
|fromUnixToISOString(new Date())|2,312,765|1156384|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:23:33 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1498009.2712528638,"samples":749086},{"name":"fromUnixToISOString(new Date())","opsSec":2312765.442081421,"samples":1156384}]}-->
