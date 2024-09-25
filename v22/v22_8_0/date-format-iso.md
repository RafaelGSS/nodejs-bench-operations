## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,096,577|548289|
|fromUnixToISOString(new Date())|1,901,356|950679|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:36:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1096577.048171502,"samples":548289},{"name":"fromUnixToISOString(new Date())","opsSec":1901356.3001878657,"samples":950679}]}-->
