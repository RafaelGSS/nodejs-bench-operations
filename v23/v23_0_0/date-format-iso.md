## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,232,525|616307|
|fromUnixToISOString(new Date())|2,342,481|1171241|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:23:13 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1232525.7265074677,"samples":616307},{"name":"fromUnixToISOString(new Date())","opsSec":2342481.0161579736,"samples":1171241}]}-->
