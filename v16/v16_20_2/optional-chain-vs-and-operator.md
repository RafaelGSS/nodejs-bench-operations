## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,497,678|97|
|Using optional chain (obj.field?.field2) (undefined)|848,272,085|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|849,622,312|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|846,639,391|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:56:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":848497677.9276032,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":848272084.8644434,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":849622312.1515096,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":846639390.611505,"samples":9}]}-->
