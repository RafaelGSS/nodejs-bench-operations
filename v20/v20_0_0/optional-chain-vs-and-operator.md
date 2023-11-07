## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|853,368,357|95|
|Using optional chain (obj.field?.field2) (undefined)|854,282,887|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|856,325,704|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|854,241,667|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:00:19 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":853368356.8121027,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":854282887.0392901,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":856325704.1402996,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":854241666.9706804,"samples":6}]}-->
