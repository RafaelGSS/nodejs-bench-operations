## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|827,644,572|95|
|Using optional chain (obj.field?.field2) (undefined)|827,551,523|95|
|Using and operator (obj.field && obj.field.field2) (Valid)|827,006,773|96|
|Using and operator (obj.field && obj.field.field2) (undefined)|827,288,878|96|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Mar 12 2024 18:55:23 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":827644572.255388,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":827551523.200255,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":827006773.1400179,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":827288878.430596,"samples":8}]}-->
