## Object.keys vs Object.getOwnPropertyNames comparison

|name|ops/sec|samples|
|-|-|-|
|Using Object.keys()|13,439,608|6719805|
|Using Object.getOwnPropertyNames()|12,610,943|6305472|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:55:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using Object.keys()","opsSec":13439608.790420914,"samples":6719805},{"name":"Using Object.getOwnPropertyNames()","opsSec":12610943.016317436,"samples":6305472}]}-->
