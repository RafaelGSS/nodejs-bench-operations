## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,951,750|975876|
|fromUnixToISOString(new Date())|1,730,982|865501|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:32:06 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1951750.8054103493,"samples":975876},{"name":"fromUnixToISOString(new Date())","opsSec":1730982.855453063,"samples":865501}]}-->
