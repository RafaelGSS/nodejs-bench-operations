## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,405,288|702661|
|fromUnixToISOString(new Date())|2,152,480|1076241|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:22:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.11.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1405288.6749843615,"samples":702661},{"name":"fromUnixToISOString(new Date())","opsSec":2152480.4114694563,"samples":1076241}]}-->
