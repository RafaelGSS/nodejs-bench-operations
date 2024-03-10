## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|896,696,956|97|
|Using optional chain (obj.field?.field2) (undefined)|902,243,181|94|
|Using and operator (obj.field && obj.field.field2) (Valid)|901,367,825|98|
|Using and operator (obj.field && obj.field.field2) (undefined)|902,150,064|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:29 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":896696955.6574122,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":902243180.770061,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":901367825.2942699,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":902150064.2682697,"samples":8}]}-->
