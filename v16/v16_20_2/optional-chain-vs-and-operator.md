## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|724,172,883|85|
|Using optional chain (obj.field?.field2) (undefined)|729,162,138|85|
|Using and operator (obj.field && obj.field.field2) (Valid)|737,317,939|87|
|Using and operator (obj.field && obj.field.field2) (undefined)|739,224,015|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:46 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":724172882.5056313,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":729162138.1993675,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":737317939.4271761,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":739224015.4928056,"samples":6}]}-->
