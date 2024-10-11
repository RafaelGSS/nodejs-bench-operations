## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,431,609|715805|
|fromUnixToISOString(new Date())|2,113,683|1056867|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:51:51 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1431609.301374661,"samples":715805},{"name":"fromUnixToISOString(new Date())","opsSec":2113683.0221928707,"samples":1056867}]}-->
