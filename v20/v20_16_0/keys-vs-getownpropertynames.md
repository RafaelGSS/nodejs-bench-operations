## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|16,985,565|8492783|
|Using Object.getOwnPropertyNames()|16,500,786|8250394|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:52:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":16985565.422506645,"samples":8492783},{"name":"Using Object.getOwnPropertyNames()","opsSec":16500786.646968594,"samples":8250394}]}-->
