## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|16,141,683|8070842|
|Using optional chain (obj.field?.field2) (undefined)|16,152,213|8076108|
|Using and operator (obj.field && obj.field.field2) (Valid)|16,211,836|8105919|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,080,815|8040408|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:03:37 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":16141683.760823147,"samples":8070842},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":16152213.898383532,"samples":8076108},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":16211836.59738425,"samples":8105919},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16080815.100575754,"samples":8040408}]}-->
