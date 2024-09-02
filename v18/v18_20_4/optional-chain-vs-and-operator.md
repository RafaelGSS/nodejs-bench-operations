## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,009,721|7504861|
|Using optional chain (obj.field?.field2) (undefined)|15,443,665|7721833|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,211,068|7605535|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,346,588|7673295|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Mon Sep 02 2024 16:30:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.588970184326172},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15009721.194144825,"samples":7504861},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15443665.109575134,"samples":7721833},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15211068.374659292,"samples":7605535},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15346588.387620479,"samples":7673295}]}-->
