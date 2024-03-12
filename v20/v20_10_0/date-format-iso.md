## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,466,598|94|
|fromUnixToISOString(new Date())|2,310,484|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:39:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1466598.4995490075,"samples":5},{"name":"fromUnixToISOString(new Date())","opsSec":2310483.588136979,"samples":4}]}-->
