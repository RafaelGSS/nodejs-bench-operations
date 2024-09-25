## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,263,213|631607|
|fromUnixToISOString(new Date())|1,704,267|852134|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:33:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1263213.3203960585,"samples":631607},{"name":"fromUnixToISOString(new Date())","opsSec":1704267.9828675124,"samples":852134}]}-->
