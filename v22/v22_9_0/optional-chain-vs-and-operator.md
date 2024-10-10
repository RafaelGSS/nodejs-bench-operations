## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|152,793,629|76414337|
|Using optional chain (obj.field?.field2) (undefined)|88,176,829|44090299|
|Using and operator (obj.field && obj.field.field2) (Valid)|98,484,790|49242401|
|Using and operator (obj.field && obj.field.field2) (undefined)|99,077,003|49538548|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:31:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":152793629.86422887,"samples":76414337},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":88176829.49866088,"samples":44090299},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":98484790.18182519,"samples":49242401},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":99077003.66023259,"samples":49538548}]}-->
