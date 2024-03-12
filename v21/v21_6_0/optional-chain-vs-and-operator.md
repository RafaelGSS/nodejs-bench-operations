## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|821,312,754|98|
|Using optional chain (obj.field?.field2) (undefined)|823,725,801|97|
|Using and operator (obj.field && obj.field.field2) (Valid)|823,028,586|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|821,853,155|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606498718261719},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":821312754.1882082,"samples":8},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":823725800.5543889,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":823028586.2472985,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":821853155.1104124,"samples":6}]}-->
