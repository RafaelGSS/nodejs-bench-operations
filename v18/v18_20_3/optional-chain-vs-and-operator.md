## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,109,718|7554861|
|Using optional chain (obj.field?.field2) (undefined)|14,874,329|7437165|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,153,883|7576942|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,036,580|7518291|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:31:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15109718.884960856,"samples":7554861},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14874329.873884117,"samples":7437165},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15153883.545274183,"samples":7576942},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15036580.35311256,"samples":7518291}]}-->
