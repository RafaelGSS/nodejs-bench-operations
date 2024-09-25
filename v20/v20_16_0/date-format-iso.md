## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,300,289|650145|
|fromUnixToISOString(new Date())|1,873,805|936903|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:33:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1300289.3732611141,"samples":650145},{"name":"fromUnixToISOString(new Date())","opsSec":1873805.3479156203,"samples":936903}]}-->
