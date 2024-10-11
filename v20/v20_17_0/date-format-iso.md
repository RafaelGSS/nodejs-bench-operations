## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,438,841|719447|
|fromUnixToISOString(new Date())|1,981,798|991141|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:12:08 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1438841.1197111683,"samples":719447},{"name":"fromUnixToISOString(new Date())","opsSec":1981798.1994599514,"samples":991141}]}-->
