## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|683,627,176|85|
|Using optional chain (obj.field?.field2) (undefined)|689,133,230|84|
|Using and operator (obj.field && obj.field.field2) (Valid)|684,908,509|85|
|Using and operator (obj.field && obj.field.field2) (undefined)|694,870,707|80|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Nov 04 2023 16:25:15 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":683627175.7003326,"samples":5},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":689133229.9296433,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":684908508.8296854,"samples":6},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":694870706.5004257,"samples":7}]}-->
