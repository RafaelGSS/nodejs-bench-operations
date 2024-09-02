## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,040,914|1520458|
|Using delete property (proto: null)|8,234,972|4117488|
|Using delete property (cached proto: null)|2,990,735|1495368|
|Using undefined assignment|13,604,057|6802029|
|Using undefined assignment (proto: null)|8,600,119|4300060|
|Using undefined property (cached proto: null)|13,810,527|6905264|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:21:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":3040914.5099520828,"samples":1520458},{"name":"Using delete property (proto: null)","opsSec":8234972.689497108,"samples":4117488},{"name":"Using delete property (cached proto: null)","opsSec":2990735.706923099,"samples":1495368},{"name":"Using undefined assignment","opsSec":13604057.86384515,"samples":6802029},{"name":"Using undefined assignment (proto: null)","opsSec":8600119.604466762,"samples":4300060},{"name":"Using undefined property (cached proto: null)","opsSec":13810527.806614965,"samples":6905264}]}-->
