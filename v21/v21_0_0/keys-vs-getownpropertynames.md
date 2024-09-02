## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,343,580|6171791|
|Using Object.getOwnPropertyNames()|12,585,325|6292663|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:53:21 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":12343580.260493213,"samples":6171791},{"name":"Using Object.getOwnPropertyNames()","opsSec":12585325.530456828,"samples":6292663}]}-->
