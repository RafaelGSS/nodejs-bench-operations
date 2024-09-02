## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|12,771,082|6385542|
|Using Object.getOwnPropertyNames()|12,342,581|6171291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:50:39 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":12771082.630263453,"samples":6385542},{"name":"Using Object.getOwnPropertyNames()","opsSec":12342581.73947902,"samples":6171291}]}-->
