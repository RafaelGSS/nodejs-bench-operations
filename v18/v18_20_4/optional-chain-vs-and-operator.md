## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|160,767,160|80389822|
|Using optional chain (obj.field?.field2) (undefined)|103,778,050|51997894|
|Using and operator (obj.field && obj.field.field2) (Valid)|106,322,569|53189593|
|Using and operator (obj.field && obj.field.field2) (undefined)|105,927,519|53026098|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 18:34:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":160767160.42999262,"samples":80389822},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":103778050.02789985,"samples":51997894},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":106322569.01935206,"samples":53189593},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":105927519.52137837,"samples":53026098}]}-->
