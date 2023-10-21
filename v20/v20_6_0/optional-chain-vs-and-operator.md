## Optional Chain (?) vs && operator

|name|ops/sec|samples|
|-|-|-|
|Using optional chain (obj.field?.field2) (Valid)|663,278,428|90|
|Using optional chain (obj.field?.field2) (undefined)|689,342,325|91|
|Using and operator (obj.field && obj.field.field2) (Valid)|701,312,453|92|
|Using and operator (obj.field && obj.field.field2) (undefined)|701,118,661|92|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 2 vCPUs | 6.8GB Mem
* __Run:__ Sat Oct 21 2023 13:05:34 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":2,"totalMemory":6.7597503662109375},"benchmarks":[{"name":"Using optional chain (obj.field?.field2) (Valid)","opsSec":663278427.8247685,"samples":6},{"name":"Using optional chain (obj.field?.field2) (undefined)","opsSec":689342325.4603521,"samples":7},{"name":"Using and operator (obj.field && obj.field.field2) (Valid)","opsSec":701312453.0695192,"samples":8},{"name":"Using and operator (obj.field && obj.field.field2) (undefined)","opsSec":701118661.251884,"samples":6}]}-->
