## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|852,296,980|97|
|Using optional chain (obj.field?.field2) (undefined)|851,462,995|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|850,847,516|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|852,256,213|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:01:35 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":852296979.6503775,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":851462995.101839,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":850847516.3935051,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":852256213.4948736,"samples":6}]}-->
