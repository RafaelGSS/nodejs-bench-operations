## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|625,970,363|88|
|Using optional chain (obj.field?.field2) (undefined)|609,376,283|87|
|Using and operator (obj.field && obj.field.field2) (Valid)|618,026,572|90|
|Using and operator (obj.field && obj.field.field2) (undefined)|611,824,455|86|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":625970362.673398,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":609376283.0767983,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":618026571.8937479,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":611824455.0265129,"samples":6}]}-->
