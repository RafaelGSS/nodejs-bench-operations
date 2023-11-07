## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|849,606,672|99|
|Using optional chain (obj.field?.field2) (undefined)|849,644,521|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|848,859,528|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|847,350,975|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Nov 07 2023 20:57:17 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.6085662841796875},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":849606671.8115115,"samples":9},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":849644521.0158187,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":848859528.2418351,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":847350975.438496,"samples":7}]}-->
