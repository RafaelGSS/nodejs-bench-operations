## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,396,202|698353|
|fromUnixToISOString(new Date())|2,099,075|1049858|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:20:55 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1396202.2613937072,"samples":698353},{"name":"fromUnixToISOString(new Date())","opsSec":2099075.173340331,"samples":1049858}]}-->
