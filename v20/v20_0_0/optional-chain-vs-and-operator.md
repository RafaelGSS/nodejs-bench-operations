## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|593,133,799|93|
|Using optional chain (obj.field?.field2) (undefined)|599,762,761|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|598,846,268|97|
|Using and operator (obj.field && obj.field.field2) (undefined)|599,113,552|98|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Tue Oct 24 2023 17:01:43 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":593133798.9212211,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":599762761.3881279,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":598846267.7293876,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":599113552.1081407,"samples":7}]}-->
