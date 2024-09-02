## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,417,419|6208710|
|Using Object.getOwnPropertyNames()|12,320,478|6160240|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:54:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":12417419.503318254,"samples":6208710},{"name":"Using Object.getOwnPropertyNames()","opsSec":12320478.96508085,"samples":6160240}]}-->
