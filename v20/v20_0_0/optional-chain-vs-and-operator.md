## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,383,078|7191540|
|Using optional chain (obj.field?.field2) (undefined)|14,503,744|7251873|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,304,363|7152182|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,521,815|7260908|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:13:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14383078.24639639,"samples":7191540},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14503744.469365474,"samples":7251873},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14304363.921400335,"samples":7152182},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14521815.068216447,"samples":7260908}]}-->
