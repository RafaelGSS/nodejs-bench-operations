## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|11,868,700|5934351|
|Using Object.getOwnPropertyNames()|12,165,540|6082771|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:55:22 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":11868700.480778687,"samples":5934351},{"name":"Using Object.getOwnPropertyNames()","opsSec":12165540.223821143,"samples":6082771}]}-->
