## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,103,405|551703|
|fromUnixToISOString(new Date())|1,819,979|909990|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:35:57 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1103405.655737614,"samples":551703},{"name":"fromUnixToISOString(new Date())","opsSec":1819979.1191301278,"samples":909990}]}-->
