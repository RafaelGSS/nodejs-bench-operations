## Date toISOString

|name|ops/sec|samples|
|-|-|-|
|new Date().toISOString()|1,650,834|825418|
|fromUnixToISOString(new Date())|1,830,227|915114|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 14:58:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"new Date().toISOString()","opsSec":1650834.3823006705,"samples":825418},{"name":"fromUnixToISOString(new Date())","opsSec":1830227.5608954486,"samples":915114}]}-->
