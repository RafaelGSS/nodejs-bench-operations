## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|681,612,262|90|
|Using optional chain (obj.field?.field2) (undefined)|687,800,713|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|693,196,489|91|
|Using and operator (obj.field && obj.field.field2) (undefined)|687,311,037|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":681612261.767552,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":687800713.2040915,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":693196488.8683201,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":687311037.4144589,"samples":6}]}-->
