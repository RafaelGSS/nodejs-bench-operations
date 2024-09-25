## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|15,224,525|7612263|
|Using optional chain (obj.field?.field2) (undefined)|15,532,961|7766481|
|Using and operator (obj.field && obj.field.field2) (Valid)|15,664,709|7832355|
|Using and operator (obj.field && obj.field.field2) (undefined)|16,311,053|8155527|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 21:11:12 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":15224525.83246159,"samples":7612263},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":15532961.67248528,"samples":7766481},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":15664709.49446552,"samples":7832355},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":16311053.717207089,"samples":8155527}]}-->
