## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,085,257|7542629|
|Using optional chain (obj.field?.field2) (undefined)|14,585,282|7292642|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,152,025|7576013|
|Using and operator (obj.field && obj.field.field2) (undefined)|15,515,174|7757588|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:09:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15085257.78319211,"samples":7542629},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14585282.882178126,"samples":7292642},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15152025.346979776,"samples":7576013},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":15515174.504000673,"samples":7757588}]}-->
