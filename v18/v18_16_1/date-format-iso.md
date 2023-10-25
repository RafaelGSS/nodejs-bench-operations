## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,543,283|89|
|fromUnixToISOString(new Date())|1,287,535|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:18 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1543282.744536282,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1287534.6551054954,"samples":9}]}-->
