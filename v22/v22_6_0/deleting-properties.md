## Deleting properties

|name|ops/sec|samples|
|-|-|-|
|Using delete property|3,047,542|1523772|
|Using delete property (proto: null)|7,969,961|3984982|
|Using delete property (cached proto: null)|3,027,148|1513575|
|Using undefined assignment|13,020,181|6510091|
|Using undefined assignment (proto: null)|8,287,966|4143984|
|Using undefined property (cached proto: null)|13,334,528|6667265|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 15:23:26 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using delete property","opsSec":3047542.9089773735,"samples":1523772},{"name":"Using delete property (proto: null)","opsSec":7969961.800283043,"samples":3984982},{"name":"Using delete property (cached proto: null)","opsSec":3027148.1655424805,"samples":1513575},{"name":"Using undefined assignment","opsSec":13020181.791676925,"samples":6510091},{"name":"Using undefined assignment (proto: null)","opsSec":8287966.740259143,"samples":4143984},{"name":"Using undefined property (cached proto: null)","opsSec":13334528.479910683,"samples":6667265}]}-->
