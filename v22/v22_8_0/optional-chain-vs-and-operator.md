## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|14,851,474|7425738|
|Using optional chain (obj.field?.field2) (undefined)|14,531,179|7265590|
|Using and operator (obj.field && obj.field.field2) (Valid)|14,716,355|7358178|
|Using and operator (obj.field && obj.field.field2) (undefined)|14,812,728|7406365|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:18:52 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":14851474.633670948,"samples":7425738},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":14531179.622078823,"samples":7265590},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":14716355.617422808,"samples":7358178},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":14812728.4002734,"samples":7406365}]}-->
