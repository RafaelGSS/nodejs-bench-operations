## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,116,205|558103|
|fromUnixToISOString(new Date())|1,581,735|790868|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 19:35:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1116205.2610724864,"samples":558103},{"name":"fromUnixToISOString(new Date())","opsSec":1581735.2977082313,"samples":790868}]}-->
