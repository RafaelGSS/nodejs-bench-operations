## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,399,936|699969|
|fromUnixToISOString(new Date())|1,981,541|990780|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 22:06:48 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1399936.521667033,"samples":699969},{"name":"fromUnixToISOString(new Date())","opsSec":1981541.7658526707,"samples":990780}]}-->
