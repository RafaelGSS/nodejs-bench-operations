## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,056,706|94|
|Using optional chain (obj.field?.field2) (undefined)|849,451,923|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,661,343|94|
|Using and operator (obj.field && obj.field.field2) (undefined)|849,305,421|101|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:03:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":848056705.5278697,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":849451922.5049692,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":848661342.7503291,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":849305421.1936482,"samples":6}]}-->
