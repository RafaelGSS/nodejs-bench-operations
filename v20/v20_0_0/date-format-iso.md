## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,415,129|707693|
|fromUnixToISOString(new Date())|2,157,043|1078522|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 17:20:10 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1415129.7652836596,"samples":707693},{"name":"fromUnixToISOString(new Date())","opsSec":2157043.1112982384,"samples":1078522}]}-->
