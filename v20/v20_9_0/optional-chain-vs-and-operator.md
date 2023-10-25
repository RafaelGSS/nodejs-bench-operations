## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|594,564,067|87|
|Using optional chain (obj.field?.field2) (undefined)|628,310,195|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|638,249,322|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|683,732,201|89|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":594564067.0377232,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":628310195.1340344,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":638249322.4837779,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":683732201.105094,"samples":6}]}-->
