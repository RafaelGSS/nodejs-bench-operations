## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|15,777,897|7888949|
|Using Object.getOwnPropertyNames()|16,058,977|8029489|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:52:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":15777897.621330703,"samples":7888949},{"name":"Using Object.getOwnPropertyNames()","opsSec":16058977.068617517,"samples":8029489}]}-->
