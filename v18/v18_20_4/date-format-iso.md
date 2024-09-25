## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|2,003,468|1001735|
|fromUnixToISOString(new Date())|1,751,628|881050|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:32:55 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":2003468.6330894148,"samples":1001735},{"name":"fromUnixToISOString(new Date())","opsSec":1751628.835561873,"samples":881050}]}-->
