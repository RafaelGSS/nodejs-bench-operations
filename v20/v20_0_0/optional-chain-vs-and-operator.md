## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,362,164|7181083|
|Using optional chain (obj.field?.field2) (undefined)|14,603,599|7301800|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,534,414|7267208|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,700,264|7350133|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:32:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14362164.168851925,"samples":7181083},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14603599.479965093,"samples":7301800},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14534414.782714035,"samples":7267208},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14700264.55820624,"samples":7350133}]}-->
