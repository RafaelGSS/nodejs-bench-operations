## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|11,921,246|5960624|
|Using Object.getOwnPropertyNames()|11,215,341|5607671|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:54:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":11921246.545606932,"samples":5960624},{"name":"Using Object.getOwnPropertyNames()","opsSec":11215341.730862431,"samples":5607671}]}-->
