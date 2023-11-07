## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|846,743,234|99|
|Using optional chain (obj.field?.field2) (undefined)|847,249,089|101|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,293,073|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|844,218,600|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:59:42 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":846743234.1608764,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":847249089.1655163,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":848293072.5546321,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":844218599.8591769,"samples":6}]}-->
