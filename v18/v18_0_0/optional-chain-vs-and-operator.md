## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|20,459,370|10229686|
|Using optional chain (obj.field?.field2) (undefined)|20,663,993|10331997|
|Using and operator (obj.field && obj.field.field2) (Valid)|20,733,429|10366715|
|Using and operator (obj.field && obj.field.field2) (undefined)|20,687,067|10343534|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Mon Jun 24 2024 00:00:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":20459370.89557617,"samples":10229686},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":20663993.48851055,"samples":10331997},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":20733429.70811743,"samples":10366715},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":20687067.630625863,"samples":10343534}]}-->
