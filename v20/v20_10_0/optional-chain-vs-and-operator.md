## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|846,114,225|98|
|Using optional chain (obj.field?.field2) (undefined)|850,176,494|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,154,732|93|
|Using and operator (obj.field && obj.field.field2) (undefined)|845,024,372|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:30 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606487274169922},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":846114224.7532198,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":850176494.1222111,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":848154731.9851713,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":845024371.6953017,"samples":6}]}-->
