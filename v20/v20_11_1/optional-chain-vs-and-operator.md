## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|848,306,641|100|
|Using optional chain (obj.field?.field2) (undefined)|848,011,842|99|
|Using and operator (obj.field && obj.field.field2) (Valid)|846,675,352|99|
|Using and operator (obj.field && obj.field.field2) (undefined)|845,655,754|94|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Sun Mar 10 2024 15:59:24 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606491088867188},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":848306641.2072328,"samples":7},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":848011842.3801391,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":846675351.9957483,"samples":9},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":845655754.407129,"samples":6}]}-->
