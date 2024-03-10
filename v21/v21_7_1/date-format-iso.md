## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,369,644|95|
|fromUnixToISOString(new Date())|2,231,067|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:43:20 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1369643.7274465105,"samples":4},{"name":"fromUnixToISOString(new Date())","opsSec":2231066.6164413407,"samples":4}]}-->
