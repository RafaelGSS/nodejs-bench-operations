## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|599,903,555|96|
|Using optional chain (obj.field?.field2) (undefined)|600,408,708|98|
|Using and operator (obj.field && obj.field.field2) (Valid)|598,872,802|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|599,065,775|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Wed Oct 25 2023 04:13:49 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":599903554.9614373,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":600408708.3300691,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":598872802.2177804,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":599065774.7239271,"samples":6}]}-->
