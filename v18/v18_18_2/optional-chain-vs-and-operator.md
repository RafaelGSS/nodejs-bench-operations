## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|636,451,362|89|
|Using optional chain (obj.field?.field2) (undefined)|623,345,008|90|
|Using and operator (obj.field && obj.field.field2) (Valid)|627,218,216|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|633,757,694|90|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:45 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":636451362.1992631,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":623345007.8734448,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":627218216.0146005,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":633757693.7320007,"samples":6}]}-->
