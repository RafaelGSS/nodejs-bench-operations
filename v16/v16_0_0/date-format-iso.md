## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,547,706|91|
|fromUnixToISOString(new Date())|1,304,655|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:13 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.759746551513672},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1547705.5252787154,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":1304654.9993029616,"samples":9}]}-->
