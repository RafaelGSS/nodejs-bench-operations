## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,453,791|83|
|fromUnixToISOString(new Date())|1,149,492|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 16:10:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1453790.7450743609,"samples":3},{"name":"fromUnixToISOString(new Date())","opsSec":1149492.0473749659,"samples":4}]}-->
