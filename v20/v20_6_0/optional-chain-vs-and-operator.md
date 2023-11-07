## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|854,225,679|100|
|Using optional chain (obj.field?.field2) (undefined)|853,461,585|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|852,463,572|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|852,402,037|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:00:56 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":854225679.2806755,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":853461584.5197811,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":852463571.5348133,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":852402036.9482868,"samples":6}]}-->
