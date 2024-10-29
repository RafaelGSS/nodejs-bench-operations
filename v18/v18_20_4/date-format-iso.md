## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,612,094|1306368|
|fromUnixToISOString(new Date())|2,166,493|1083400|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:19:49 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2612094.3755859584,"samples":1306368},{"name":"fromUnixToISOString(new Date())","opsSec":2166493.8917450476,"samples":1083400}]}-->
