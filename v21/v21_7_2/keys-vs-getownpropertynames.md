## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,238,275|6619138|
|Using Object.getOwnPropertyNames()|12,343,954|6171978|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:53:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":13238275.52343791,"samples":6619138},{"name":"Using Object.getOwnPropertyNames()","opsSec":12343954.86441271,"samples":6171978}]}-->
