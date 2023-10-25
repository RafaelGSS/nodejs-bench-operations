## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,401,872|88|
|fromUnixToISOString(new Date())|1,112,381|83|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 03:47:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1401871.9608306845,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":1112380.5526508228,"samples":6}]}-->
