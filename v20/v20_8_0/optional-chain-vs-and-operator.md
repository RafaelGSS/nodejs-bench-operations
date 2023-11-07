## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|851,678,475|98|
|Using optional chain (obj.field?.field2) (undefined)|854,681,667|92|
|Using and operator (obj.field && obj.field.field2) (Valid)|853,718,512|88|
|Using and operator (obj.field && obj.field.field2) (undefined)|853,404,078|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:02:11 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":851678475.329887,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":854681666.8752655,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":853718512.2370561,"samples":5},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":853404077.5310298,"samples":5}]}-->
