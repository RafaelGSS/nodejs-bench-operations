## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,309,950|7154976|
|Using optional chain (obj.field?.field2) (undefined)|15,525,086|7762544|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,318,726|7659364|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,083,181|7041591|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:36:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14309950.45463639,"samples":7154976},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15525086.354414392,"samples":7762544},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15318726.375844968,"samples":7659364},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14083181.774582839,"samples":7041591}]}-->
