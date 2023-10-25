## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|629,345,297|88|
|Using optional chain (obj.field?.field2) (undefined)|639,830,065|89|
|Using and operator (obj.field && obj.field.field2) (Valid)|638,825,103|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|622,451,027|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:47 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":629345297.129566,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":639830065.0819613,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":638825102.6936415,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":622451027.3022897,"samples":7}]}-->
