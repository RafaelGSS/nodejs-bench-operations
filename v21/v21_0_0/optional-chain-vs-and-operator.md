## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,505,681|101|
|Using optional chain (obj.field?.field2) (undefined)|849,640,496|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,204,506|95|
|Using and operator (obj.field && obj.field.field2) (undefined)|848,852,370|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 21:02:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":848505680.5433637,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":849640495.6214217,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":848204506.2346504,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":848852370.1779175,"samples":6}]}-->
