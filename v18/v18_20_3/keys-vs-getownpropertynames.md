## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,320,312|6160157|
|Using Object.getOwnPropertyNames()|12,977,781|6488891|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:51:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":12320312.728866795,"samples":6160157},{"name":"Using Object.getOwnPropertyNames()","opsSec":12977781.741880681,"samples":6488891}]}-->
