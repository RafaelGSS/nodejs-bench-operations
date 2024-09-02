## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,707,919|7853960|
|Using optional chain (obj.field?.field2) (undefined)|14,725,938|7362970|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,566,305|7283154|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,596,418|7298210|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:37:36 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15707919.685730295,"samples":7853960},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14725938.851480205,"samples":7362970},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14566305.98977183,"samples":7283154},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14596418.832251582,"samples":7298210}]}-->
