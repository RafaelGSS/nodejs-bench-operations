## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,441,419|720787|
|fromUnixToISOString(new Date())|2,040,880|1026726|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:12:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1441419.9266240431,"samples":720787},{"name":"fromUnixToISOString(new Date())","opsSec":2040880.6933128887,"samples":1026726}]}-->
