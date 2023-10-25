## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|654,759,073|85|
|Using optional chain (obj.field?.field2) (undefined)|672,321,704|85|
|Using and operator (obj.field && obj.field.field2) (Valid)|685,466,027|88|
|Using and operator (obj.field && obj.field.field2) (undefined)|677,053,880|88|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:50 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":654759073.3916065,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":672321703.6480286,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":685466027.2383442,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":677053879.7487365,"samples":6}]}-->
