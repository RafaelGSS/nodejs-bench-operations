## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,303,717|96|
|fromUnixToISOString(new Date())|1,100,949|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:14 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1303716.990153058,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1100948.8110864162,"samples":6}]}-->
