## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,309,676|654839|
|fromUnixToISOString(new Date())|1,871,543|935772|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:59:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1309676.5829295898,"samples":654839},{"name":"fromUnixToISOString(new Date())","opsSec":1871543.5021691376,"samples":935772}]}-->
