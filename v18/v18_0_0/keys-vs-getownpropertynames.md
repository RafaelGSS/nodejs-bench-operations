## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|15,592,339|7796170|
|Using Object.getOwnPropertyNames()|14,538,132|7269067|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:50:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":15592339.224842465,"samples":7796170},{"name":"Using Object.getOwnPropertyNames()","opsSec":14538132.344718637,"samples":7269067}]}-->
