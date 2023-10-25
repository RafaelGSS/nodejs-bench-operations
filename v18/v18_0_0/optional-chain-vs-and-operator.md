## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|600,635,194|93|
|Using optional chain (obj.field?.field2) (undefined)|599,367,489|96|
|Using and operator (obj.field && obj.field.field2) (Valid)|587,653,593|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|599,524,072|91|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:48 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":600635193.7143804,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":599367488.8832651,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":587653592.9444718,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":599524071.7658277,"samples":7}]}-->
