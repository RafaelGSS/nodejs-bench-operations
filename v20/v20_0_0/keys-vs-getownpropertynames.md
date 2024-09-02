## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,707,843|6353922|
|Using Object.getOwnPropertyNames()|12,735,371|6367686|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:51:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":12707843.099561833,"samples":6353922},{"name":"Using Object.getOwnPropertyNames()","opsSec":12735371.955237571,"samples":6367686}]}-->
