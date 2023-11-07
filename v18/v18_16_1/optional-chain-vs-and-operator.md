## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,311,564|100|
|Using optional chain (obj.field?.field2) (undefined)|848,110,906|101|
|Using and operator (obj.field && obj.field.field2) (Valid)|847,394,441|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|848,081,238|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:57:53 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":848311563.7192483,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":848110905.9055536,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":847394440.5856807,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":848081238.262589,"samples":8}]}-->
