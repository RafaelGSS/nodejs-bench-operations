## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,388,717|694438|
|fromUnixToISOString(new Date())|2,022,489|1011349|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:13:03 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1388717.72228632,"samples":694438},{"name":"fromUnixToISOString(new Date())","opsSec":2022489.7280527847,"samples":1011349}]}-->
