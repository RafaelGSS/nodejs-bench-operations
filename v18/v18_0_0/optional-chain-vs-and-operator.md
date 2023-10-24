## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,062,127|97|
|Using optional chain (obj.field?.field2) (undefined)|591,807,560|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|593,594,973|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|592,016,650|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":593062126.9630762,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":591807560.073124,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":593594973.0214051,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":592016650.3377469,"samples":6}]}-->
